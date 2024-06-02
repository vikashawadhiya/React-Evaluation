import React, { useContext } from 'react' ;
import { AuthContext } from '../contexts/AuthContext';
import { Box, Button, Spacer, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';




const Navbar = () =>{
    const{ authState, logout } = useContext(AuthContext);

    return {
        <Flex as="nav" p="4" bg="grey.150">
         {authState.isAuthenticated ? (
            <>
            <Box>{authState.email}</Box>
            <Spacer/>
            <Button as={Link} to="/home" mr="4">Home</Button>
            <Button onclick={logout}>Logout</Button>
            </>
         ) : (
            <Button as={Link} to="/login">Login</Button>
         )}
        </Flex>

    }
}