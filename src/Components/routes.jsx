import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginComponent from './Login/Login'
import PageComponent from './Search/Page'


export const routes = (
    <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/page" component={PageComponent} />
    </Switch>
);
