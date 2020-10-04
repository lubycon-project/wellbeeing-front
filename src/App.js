import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/onboard/onBoardPage';
import Main from './pages/main/Main';

const App = () => {
    return (
        <>
            <Route component={RegisterPage} path="/" exact={true}/>
            <Route component={LoginPage} path="/login" />
            <Route component={Main} path="/main" />
        </>
    );
};

export default App;
