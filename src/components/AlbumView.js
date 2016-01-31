import React from 'react';
// import Link from 'react-router';
import {albumData} from '../constants/constants';
// import ThumbnailContainer from './ThumbnailContainer';
import Gallery from 'react-photo-gallery';
import {Link} from 'react-router';

class AlbumView extends React.Component {

  render() {
    const {title, count, photos} = albumData[this.props.params.albumId];
    console.log(photos);
    return (
      <div  >
        <Link to='/'>Back</Link>
        <h3>{title}</h3>
        <p>Count: {count}</p>
        <Gallery photos={photos} />
      </div>
    );
  }
}


export default AlbumView;
