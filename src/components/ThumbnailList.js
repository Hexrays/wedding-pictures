require('styles/Thumbnails.scss');

import React from 'react';
import {sections} from '../constants/constants';
import Thumbnails from './Thumbnails';

class ThumbnailList extends React.Component {
  render() {
    return (
      <div className="thumbnails clearfix">
        <Thumbnails sections={sections} />
      </div>
    );
  }
}

export default ThumbnailList