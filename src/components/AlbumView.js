import React from 'react';
// import Link from 'react-router';
import {albumData} from '../constants/constants';
import ThumbnailContainer from './ThumbnailContainer';
import {Link} from 'react-router';
import {Preload} from 'react-preload';

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = albumData[this.props.params.albumId];
  }

  componentWillMount() {
    const {count, thumbs, folder} = this.state;
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
  }

  _handleImageLoadError() {
    console.log('err');
  }

  _handleImageLoadSuccess() {
    console.log('success');
  }

  render() {
    const {title, count, thumbs} = this.state;
    const loadingIndicator = (<div>Loading...</div>)
    // let images = [];

    return (
      <div  >
        <Link to='/'>Back</Link>
        <h3>{title}</h3>
        <p>Count: {count}</p>
        <Preload
          loadingIndicator={loadingIndicator}
          images={thumbs}
          autoResolveDelay={3000}
          onError={this._handleImageLoadError}
          onSuccess={this._handleImageLoadSuccess}
          resolveOnError={true}
          mountChildren={true}
          >
          <ThumbnailContainer thumbs={thumbs} />
        </Preload>
      </div>
    );
  }
}


export default AlbumView;
