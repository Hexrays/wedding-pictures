require('styles/gallery.scss');

import React from 'react';
import {find} from 'lodash';
import Gallery from 'react-photo-gallery';
import {Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import {albumData} from '../constants/constants';


class PhotoGallery extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0,0);
    console.log('Update');
  }

  renderGallery(photos) {
    return(
        <Gallery className="gallery" photos={photos} key={this.props.params.albumId} />
    );
  }

  render() {
    const {title, count, photos, number} = find(albumData, (obj) => {return obj.id === this.props.params.albumId});
    let nextAlbumNumber = number === (albumData.length) ? 0 : number;
    let nextAlbum = albumData[nextAlbumNumber];

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
          {this.renderGallery(photos)}
        </section>
        <Footer>
          <Link className="gallery__footer-link brandon" to={`/album/${nextAlbum.id}`} >
            <div className="gallery__footer-next clearfix">
              next album: {nextAlbum.title} <span className="slightly-bigger">&#8611;</span>
            </div>
          </Link>

        </Footer>
      </div>
    );
  }
}


export default PhotoGallery;
