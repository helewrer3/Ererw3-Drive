import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactDOM from 'react-dom'
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase";
import {v4 as uuidv4} from 'uuid'
import { ProgressBar, Toast } from "react-bootstrap";

const AddFileButton = ({currentFolder}) => {
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const {currentUser} = useAuth();
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if(currentFolder == null || file == null) return;
        const id = uuidv4();
        setUploadingFiles(prev => [
            ...prev,
            {id: id, name: file.name, progress: 0, error: false}
        ])
        const filePath = `${[...currentFolder.path.map(val => val.name), currentFolder.name, file.name].join('/')}`;
        const uploadTask = storage.ref(`/file/${currentUser.uid}/${filePath}`).put(file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = snapshot.bytesTransferred/snapshot.totalBytes;
            setUploadingFiles(prev => {
                return prev.map(file => {
                    if(file.id === id) return {...file, progress: progress};
                    return file;
                })
            })
        }, () => {
            setUploadingFiles(prev => {
                return prev.map(file => {
                    if(file.id === id) return {...file, error: true};
                    return file;
                })
            })
        }, 
        () => {
            setUploadingFiles(prev => {
                return prev.filter(file => file.id !== id);
            })
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                database.files.where('name', '==', file.name).where('userId', '==', currentUser.uid).where('folderId', '==', currentFolder.id).get().then(files => {
                    const prevfile = files.docs[0];
                    if(prevfile) prevfile.ref.update({url: url})
                    else database.files.add({
                        url: url,
                        name: file.name,
                        createdAt: database.getCurrentTimeStamp(),
                        folderId: currentFolder.id,
                        userId: currentUser.uid
                    })
                })
                
            })
        })
        e.target.value = null;
    }
    return (<>
        <label className='btn btn-outline-success btn-sm m-0 mt-2 ms-2'>
            <FontAwesomeIcon icon={faFileUpload} />
            <input type="file" onChange={handleUpload} style={{opacity: 0, position: 'absolute', left: '-9999px'}}/>
        </label>
        {ReactDOM.createPortal(
            <div style={{position: 'absolute', bottom: '1rem', right: '1rem', maxWidth: '250px'}}>
                {uploadingFiles.map(file => (
                    <Toast key={file.id} onClose={() => {
                        setUploadingFiles(prev => {
                            return prev.filter(prevfile => prevfile.id !== file.id);
                        })
                    }}>
                        <Toast.Header closeButton={file.error} className='text-truncate w-100 d-block'>
                            {file.name}
                        </Toast.Header>
                        <Toast.Body>
                            <ProgressBar 
                                label={file.error ? 'Error' : `${Math.round(file.progress*100)}%`} 
                                now={file.error ? 100 : file.progress*100} 
                                animated={!file.error} 
                                variant={file.error ? 'danger' : 'primary'} 
                            />
                        </Toast.Body>
                    </Toast>
                ))}
            </div>,
            document.body
        )}
    </>)
}

export default AddFileButton;