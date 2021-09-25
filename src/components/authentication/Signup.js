import React, { useState, useRef } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import CenteredContainer from './CenteredContainer';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordRef.current.value === passwordConfirmRef.current.value){
            try {
                setError('');
                setLoading(true);
                await signup(emailRef.current.value, passwordRef.current.value);
                history.push('/');
            } catch (error) {
                setError('Failed to create an account.');
                console.log(error);
            }
            setLoading(false);
        }
        else setError('Passwords do no match.');
    }

    return (
    <CenteredContainer>
        <h1 className='text-center m-4'>Ererw3 Drive</h1>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className='w-100 mt-2' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Log In</Link>
        </div>
    </CenteredContainer>
    )
}

export default Signup;