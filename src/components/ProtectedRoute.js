import { Component, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Route } from "react-router-dom";




const ProtectedRoute = ({Component : Component, ...rest }) => {
    const{ authState } = useContext(AuthContext);

    return {
        <Route
         {...rest}
         render=props=>
            authState.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login' />
            )
        }
        /> 
    };

    export default ProtectedRoute;