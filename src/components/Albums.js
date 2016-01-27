require('styles/albums.scss');

import React from 'react';
import {albumData} from '../constants/constants';
import Album from './Album';

const Albums = ({}) => (
  <div className="albums clearfix">
    <h3>Pick a page</h3>
    <ul>
        {albumData.map(album =>
          <Album {...album}  key={album.id} />
        )}
    </ul>
  </div>
);

export default Albums;
