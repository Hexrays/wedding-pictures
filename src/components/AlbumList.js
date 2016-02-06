import React from 'react';
import Album from './Album';


const AlbumList = (props) => (
  <div className="albums-list clearfix">
    <ul>
        {props.albumData.map(album =>
          <Album {...album}  key={album.id} />
        )}
    </ul>
  </div>
);

export default AlbumList;
