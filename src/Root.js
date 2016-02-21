import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import AlbumsPage from './components/AlbumsPage';
import PhotoGallery from './components/PhotoGallery';

const Root = () => (

    <Router history={createHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AlbumsPage}/>
            <Route path="/album/:albumId" component={PhotoGallery} />
            <Redirect from="album/:albumId" to="/album/:albumId" />
        </Route>
    </Router>
);

export default Root;
