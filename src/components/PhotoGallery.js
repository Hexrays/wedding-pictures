require('styles/gallery.scss');

import React from 'react';
import Gallery from 'react-photo-gallery';
import {Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import {albumData} from '../constants/constants';


class PhotoGallery extends React.Component {

  render() {
    const {title, count, photos, id} = albumData[this.props.params.albumId];
    let nextAlbum = id === (albumData.length - 1) ? 0 : id + 1;

    return (
      <div className="page" >
        <Header>
          <h3>{title}</h3>
        </Header>
        <Link to='/'>Back</Link>
        <p>Count: {count}</p>
        <section className="gallery">
          <Gallery className="gallery" photos={photos} />
        </section>
        <Footer>
          <Link to={`/album/${nextAlbum}`} >next</Link>

        </Footer>
      </div>
    );
  }
}


export default PhotoGallery;
