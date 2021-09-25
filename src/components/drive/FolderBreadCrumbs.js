import { Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../hooks/useFolder";

const FolderBreadCrumbs = ({currentFolder}) => {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
    if(currentFolder) path = [...path, ...currentFolder.path]
    return (<>
        <Breadcrumb className='flex-grow-1' listProps={{ className: 'bg-white m-0'}}>
            {path.map((folder) => (
                <Breadcrumb.Item key={folder.id} linkAs={Link} linkProps={{to: folder.id === null ? '/' : `/folder/${folder.id}`}} className='text-truncate d-inline-block' style={{maxWidth: '150px'}}>
                    {folder.name}
                </Breadcrumb.Item>
            ))}
            <Breadcrumb.Item className='text-truncate d-inline-block' style={{maxWidth: '200px'}} active>
                {currentFolder && currentFolder.name}
            </Breadcrumb.Item>
        </Breadcrumb>
    </>);
}

export default FolderBreadCrumbs;