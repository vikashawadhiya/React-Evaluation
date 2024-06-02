import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider =  ({ children }) => {
    const [authState, setAuthstate] = useState({isAuthentication: false, token: null, email: null });

    const login = (token, email) => {
        setAuthstate({ isAuthenticated: true, token, email }) ;
    } ;
    const logout = () => (
        setAuthstate({isAuthenticated: false, token: null, email: null });
    );

    return (
        <AuthContext.Provider value={{ authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};