import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"


const Folder = ({folder}) => {
    return (<>
        <Button to={`/folder/${folder.id}`} as={Link} variant='outline-dark' className='text-truncate w-100'>
            <FontAwesomeIcon icon={faFolder} className='me-2' />
            {folder.name}
        </Button>
    </>)
}

export default Folder;