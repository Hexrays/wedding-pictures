require('styles/gallery.scss');

import React from 'react';
import {albumData} from '../constants/constants';
import Gallery from 'react-photo-gallery';
import {Link} from 'react-router';

class PhotoGallery extends React.Component {

  render() {
    const {title, count, photos} = albumData[this.props.params.albumId];
    return (
      <div className="page" >
        <Link to='/'>Back</Link>
        <h3>{title}</h3>
        <p>Count: {count}</p>
        <section className="gallery">
          <Gallery className="gallery" photos={photos} />
        </section>

      </div>
    );
  }
}


export default PhotoGallery;
