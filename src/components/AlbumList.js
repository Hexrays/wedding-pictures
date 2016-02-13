import React from 'react';
import Album from './Album';

const AlbumList = (props) => (
  <div className="album-list-container clearfix">
    <ul className="album-list">
        {props.albumData.map(album =>
          <Album {...album}  key={album.id} />
        )}
    </ul>
  </div>
);

export default AlbumList;
