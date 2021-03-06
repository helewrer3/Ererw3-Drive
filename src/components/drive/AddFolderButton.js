import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {database} from '../../firebase';
import {useAuth} from '../../contexts/AuthContext'
import { ROOT_FOLDER } from "../../hooks/useFolder";

const AddFolderButton = ({currentFolder}) => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const {currentUser} = useAuth();

    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        if(currentFolder == null) return;
        const path = [...currentFolder.path];
        if(currentFolder !== ROOT_FOLDER)path.push({name: currentFolder.name, id: currentFolder.id});
        database.folders.add({
            name: name,
            parentId: currentFolder.id,
            userId: currentUser.uid,
            path: path,
            createdAt: database.getCurrentTimeStamp()
        })
        setName('');
        closeModal();
    }
    return (<>
        <Button onClick={openModal} variant='outline-success mt-2' size='sm'>
            <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
        <Modal show={open} onHide={closeModal}>
            <Form onSubmit={handelSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Folder Name</Form.Label>
                        <Form.Control type='text' value={name} onChange={e => setName(e.target.value)} required/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeModal}>Close</Button>
                    <Button variant='success' type='submit'>Add Folder</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>)
}

export default AddFolderButton;