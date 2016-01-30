// require('styles/Thumbnails.scss');

import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = ({
    sections
}) => (
    <ul>
      {sections.map(section =>
        <Thumbnail key={section.id}
            {...section}
        />
      )}
    </ul>
);

export default Thumbnails;
