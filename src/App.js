import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage' ;
import ProductDetailPage from './pages/ProductDetailsPage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const { authState } = useContext(AuthContext);
  

  return{
    <ChakraProvider>
     <AuthProvider>
      <Router>
       <Navbar/>
       <Switch>
       <Route path="/login" Component={LoginPage} />
       <ProtectedRoute path="/home" Component={HomePage} />
       <ProtectedRoute path="product/:id" Component={ProductDetailPage} />
       <Redirect from="/" to {authState.isAuthenticated ? "/home" : "/login"} />
       </Switch>
      </Router>
     </AuthProvider>
    </ChakraProvider>
  
  };
};

export default App ;