import React, { useState, useRef } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import CenteredContainer from './CenteredContainer';

const ForgotPassword = () => {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setError('Check your inbox for further instructions.');
        } catch (error) {
            setError('Failed to reset password.');
            console.log(error);
        }
        setLoading(false);
    }

    return (
    <CenteredContainer>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Reset Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/login'>Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
    </CenteredContainer>
    )
}

export default ForgotPassword;