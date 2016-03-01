import React from 'react';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
// import createHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import AlbumsPage from './components/AlbumsPage';
import PhotoGallery from './components/PhotoGallery';

 // history={createHistory()}
const Root = () => (

    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={AlbumsPage}/>
            <Route path="/album/:albumId" component={PhotoGallery} />
            <Redirect from="album/:albumId" to="/pics/album/:albumId" />
        </Route>
    </Router>
);

export default Root;
