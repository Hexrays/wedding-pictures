require('styles/albums.scss');

import React from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import Footer from './Footer';
import {albumData} from '../constants/constants';

const AlbumsPage = () => (
  <div className="page">
    <Header tag="album-list__header">
      <h3 className="album-list__header-copy">Thanks for the memories!</h3>
    </Header>
    <AlbumList albumData={albumData} />
    <Footer></Footer>
  </div>
);

export default AlbumsPage;
