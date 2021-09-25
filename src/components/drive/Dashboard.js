import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useFolder } from "../../hooks/useFolder"
import AddFileButton from "./AddFileButton"
import AddFolderButton from "./AddFolderButton"
import Folder from "./Folder"
import File from "./File"
import FolderBreadCrumbs from "./FolderBreadCrumbs"
import NavbarComponent from "./Navbar"

const Dashboard = () => {
    const {folderId} = useParams();
    const {folder, childFolders, childFiles} = useFolder(folderId);
    return (<>
        <NavbarComponent />
        <Container fluid>
            <div className='d-flex align-items-center'>
                <FolderBreadCrumbs currentFolder={folder}/>
                <AddFolderButton currentFolder={folder}/>
                <AddFileButton currentFolder={folder}/>
            </div>
            <div className='d-flex flex-wrap'>
                {childFolders.map((folder) => (
                    <div key={folder.id} style = {{maxWidth: '250px'}} className='p-2'>
                        <Folder folder={folder}/>
                    </div>
                ))}
            </div>
            <div className='d-flex flex-wrap'>
                {childFiles.map((file) => (
                    <div key={file.id} style = {{maxWidth: '250px'}} className='p-2'>
                        <File file={file}/>
                    </div>
                ))}
            </div>
        </Container>
    </>)
}

export default Dashboard;