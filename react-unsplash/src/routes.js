import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Photos from './pages/photo-wide';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/photos/:id" component={Photos} />
        </Switch>
        </BrowserRouter>
    )
}

