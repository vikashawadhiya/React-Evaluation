import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Button, Input, VStack, Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';





const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setpassword ] = useState('');
    const [error, setError ] = useState('');
    const { login } = useContext(AuthContext):
    const history = useHistory();

    useEffect(() => {
        document.getElementById('email'.focus());

    }, []) ;
    try {
        const response = awaitaxios.post('/api/login', {email, password });
        login(response.data.token, email);
        history.push('/home');
    } catch (error){
        setError('invalid email or incorrect password');

    }
};
return {
    <VStack spacing={4}>
    <Input
      type = "password"
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value0)}
    />
    <Button onClick={handleSubmit}>Login</Button>

    </VStack>
};

export default LoginPage ;
    
    