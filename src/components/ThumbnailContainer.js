import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailContainer =({
  thumbs
}) => (
  <ul>
    {thumbs.map((thumb, i) =>
      <Thumbnail thumb={thumb} key={i} />
    )}
  </ul>
);

export default ThumbnailContainer;