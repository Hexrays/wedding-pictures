import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import AlbumsPage from './components/AlbumsPage';
import PhotoGallery from './components/PhotoGallery';

const Root = () => (

    <Router history={createHistory()}>
        <Route path="/pics/" component={App}>
            <IndexRoute component={AlbumsPage}/>
            <Route path="/album/:albumId" component={PhotoGallery} />
            <Redirect from="album/:albumId" to="/pics/album/:albumId" />
        </Route>
        <Redirect from="/" to="/pics/" />
        <Redirect from="/pics" to="/pics/" />

    </Router>
);

export default Root;
