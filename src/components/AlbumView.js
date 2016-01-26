import React from 'react';
// import Link from 'react-router';
import {albumData} from '../constants/constants';
import ThumbnailContainer from './ThumbnailContainer';

const AlbumView = React.createClass({

  render() {
    const {title, count, thumbs, folder} = albumData[this.props.params.albumId];
    if(!thumbs.length) {
      for (let i = 1; i < count; i++) {
        let fileNum;
        if(i < 10) {
          fileNum = `00${i}`;
        } else if (i < 100) {
          fileNum = `0${i}`;
        } else {
          fileNum = i;
        }
        let url = `${folder}/${fileNum}.jpg`;
        thumbs.push(url);
      }
    }

    return (
      <div  >
        <h3>{title}</h3>
        <p>Count: {count}</p>
        <ThumbnailContainer thumbs={thumbs} />
      </div>
    );
  }
});


export default AlbumView;