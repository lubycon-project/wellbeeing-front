import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import MainPage from './pages/main/Main';

const App = () => {
    return (
        <>
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={MainPage} path="/main" />
        </>
    );
};

export default App;
