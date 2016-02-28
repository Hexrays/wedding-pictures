import React from 'react';
import Album from './Album';

const AlbumList = (props) => (
  <div className="album-list-container clearfix">
    <ul className="album-list">
        {props.albumData.map(album =>
          <Album {...album}  key={album.id} />
        )}
        <li className="album insta">
            <a className="album-insta-link" href="https://www.instagram.com/explore/tags/jeffkatieco/" target="_blank"><span>see more <br/> on instagram<br/>#jeffkatieco</span></a>
        </li>
    </ul>
  </div>
);

export default AlbumList;
