import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {AuthProvider} from '../contexts/AuthContext';
import Signup from './authentication/Signup';
import Profile from './authentication/Profile';
import Login from './authentication/Login';
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';
import Dashboard from './drive/Dashboard';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    {/* Drive */}
                    <PrivateRoute path='/' exact component={Dashboard}/>
                    <PrivateRoute path='/folder/:folderId' exact component={Dashboard}/>
                    {/* Profile */}
                    <PrivateRoute path='/user' component={Profile} />
                    <PrivateRoute path='/update-profile' exact component={UpdateProfile} />
                    {/* Auth */}
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />
                    <Route path='/forgot-password' component={ForgotPassword}/>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;