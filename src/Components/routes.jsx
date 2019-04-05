import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginComponent from './Login/Login'

export const routes = (
    <Switch>
        <Route exact path="/" component={LoginComponent} />
    </Switch>
);
