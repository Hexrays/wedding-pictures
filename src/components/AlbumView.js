import React from 'react';
// import Link from 'react-router';
import {albumData} from '../constants/constants';
import ThumbnailContainer from './ThumbnailContainer';
import {Link} from 'react-router';

class AlbumView extends React.Component {

  render() {
    const {title, count, thumbs} = albumData[this.props.params.albumId];
    // throttle and test. I don't think they're being preloaded...
    return (
      <div  >
        <Link to='/'>Back</Link>
        <h3>{title}</h3>
        <p>Count: {count}</p>
        <ThumbnailContainer thumbs={thumbs} />
      </div>
    );
  }
}


export default AlbumView;
