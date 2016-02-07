require('styles/albums.scss');

import React from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import Footer from './Footer';
import {albumData} from '../constants/constants';

const AlbumsPage = () => (
  <div className="page">
    <Header>
      <div className="album-page__header">
        <h1 className="album-page__header-copy">Thanks for the memories!</h1>
      </div>
      <div className="album-page__title">
        <h3 className="album-page__name brandon">J + K</h3>
        <div className="album-page__details">
          <p className="album-page__date">October 3, 2015</p>
          <p className="album-page__photo-cred">Photos by <a href="http://lovemedophotography.com" target="_blank">Love Me Do</a></p>
        </div>
      </div>
    </Header>
    <AlbumList albumData={albumData} />
    <Footer></Footer>
  </div>
);

export default AlbumsPage;
