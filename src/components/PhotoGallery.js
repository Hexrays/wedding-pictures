require('styles/Gallery.scss');

import React from 'react';
import {find, debounce} from 'lodash';
import Gallery from './Gallery';
import {Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import {albumData} from '../constants/constants';

const MAX_IMAGES_PER_LOAD = 25;

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage    : 0,
      remainingPhotos : [],
      livePhotos      : [],
      count           : 0,
      title           : 'Gallery'
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadPhotos(this.props.params.albumId);
  }

  handleScroll(){
    if ( !this.state.allLoaded && (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 600)) {
      this.loadMore();
    }
  }

  onNextClick() {
    let nextAlbum = this.state.nextAlbum.id;
    this.setState({
      currentImage    : 0,
      remainingPhotos : [],
      livePhotos      : [],
      count           : 0,
      title           : 'Gallery'
    });
    this.loadPhotos(nextAlbum);
  }

  loadPhotos(albumId) {
    const {title, count, photos, number} = find(albumData, (obj) => {return obj.id === albumId});
    let remainPhotos = photos;
    let nextBatch = remainPhotos.splice(0, MAX_IMAGES_PER_LOAD);
    let nextAlbumNumber = number === (albumData.length) ? 0 : number;
    let nextAlbum = albumData[nextAlbumNumber];

    window.scrollTo(0,0);

    this.setState({
      currentImage    : 0,
      remainingPhotos : remainPhotos,
      livePhotos      : nextBatch,
      count           : count,
      title           : title,
      allLoaded       : remainPhotos.length === 0 ? true : false,
      albumId         : albumId,
      nextAlbum       : nextAlbum
    });
  }

  loadMore() {
    let remainPhotos = this.state.remainingPhotos;
    let nextBatch = remainPhotos.splice(0, MAX_IMAGES_PER_LOAD);
console.log('MORE');
    this.setState({
      remainingPhotos : remainPhotos,
      livePhotos      : this.state.livePhotos.concat(nextBatch),
      allLoaded       : remainPhotos.length === 0 ? true : false
    });
  }

  renderGallery(photos) {
    return(
        <Gallery className="gallery" photos={photos} key={this.props.params.albumId} />
    );
  }

  render() {
    const {title, count, livePhotos, albumId, nextAlbum} = this.state;
    if(!livePhotos.length) {
      return (<div className="loading">Loading Gallery...</div>);
    }
    return (
      <div className="page" >
        <Header tag="gallery__header">
          <h3 className="gallery__title brandon">{title}</h3>
          <div className="gallery__details clearfix">
            <p className="gallery__ind-link"><Link to='/'>&lt;&lt; index</Link></p>
            <p className="gallery__photo-cred"> <span className="show-mb-inline">||</span> {count} photos by <a href="http://lovemedophotography.com" target="_blank">Love Me Do</a></p>
          </div>
        </Header>

        <section className="gallery">
          {this.renderGallery(livePhotos, albumId)}
        </section>
          <Link className="gallery__footer-link brandon" onClick={this.onNextClick.bind(this)} to={`/album/${nextAlbum.id}`} >
            <div className="gallery__footer-next clearfix">
              next album: {nextAlbum.title} <span className="slightly-bigger">&#8611;</span>
            </div>
          </Link>
        <Footer/>
      </div>
    );
  }
}


export default PhotoGallery;
