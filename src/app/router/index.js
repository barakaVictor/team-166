import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/landing/Landing';
import Login from '../components/auth/login/Login';

const Routes = () => (
        <Switch>
            <Route path='/' exact component={Landing}/>
            <Route path='/login' exact component={Login} />
        </Switch>
);

export default Routes;
