import React from 'react';
// import Link from 'react-router';
import {albumData} from '../constants/constants';
import ThumbnailContainer from './ThumbnailContainer';
import {Link} from 'react-router';

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = albumData[this.props.params.albumId];
  }

  componentWillMount() {
    const {count, thumbs, folder} = this.state;
    let images = [];
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
        images.push(url);
      }
      this.setState({
        thumbs: images
      });
    }
  }

  render() {
    const {title, count, thumbs} = this.state;
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
