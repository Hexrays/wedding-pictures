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
        <Header tag="gallery__header">
          <h3 className="gallery__title brandon">{title}</h3>
          <div className="gallery__details">
            <p className="gallery__ind-link"><Link to='/'>&lt;&lt; index</Link></p>
            <p className="gallery__photo-cred">{count} photos by <a href="http://lovemedophotography.com" target="_blank">Love Me Do</a></p>
          </div>
        </Header>

        <section className="gallery">
          <Gallery className="gallery" photos={photos} />
        </section>
        <Footer>
          <div className="gallery__footer-next clearfix">
            <Link className="gallery__footer-link brandon" to={`/album/${nextAlbum}`} >next album: {albumData[nextAlbum].title} &#8611;</Link>
          </div>

        </Footer>
      </div>
    );
  }
}


export default PhotoGallery;
