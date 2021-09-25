import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext'
import CenteredContainer from "./CenteredContainer";

const Profile = () => {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        setError('');
        try {
            await logout();
            history.push('/login');
        } catch (error) {
            setError('Failed to logout');
            console.log(error);  
        }
    }

    return (
    <CenteredContainer>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
                <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <Button onClick={handleLogout} variant='link'>Log Out</Button>
            <Button onClick={() => history.push('/')} variant='link'>To Drive</Button>
        </div>
    </CenteredContainer>
    )
}

export default Profile; 