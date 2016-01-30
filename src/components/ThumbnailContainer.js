import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailContainer =({
  thumbs
}) => (
  <ul className="clearfix">
    {thumbs.map((thumb, i) =>
      <Thumbnail {...thumb} key={i} />
    )}
  </ul>
);

export default ThumbnailContainer;
