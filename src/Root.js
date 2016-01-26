import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import App from './components/Main';
import Albums from './components/Albums';
import AlbumView from './components/AlbumView';

const Root = () => (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Albums}/>
            <Route path="/album/:albumId" component={AlbumView} />
            <Redirect from="album/:albumId" to="/album/:albumId" />
        </Route>
    </Router>
);

export default Root;