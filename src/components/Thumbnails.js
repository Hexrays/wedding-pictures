// require('styles/Thumbnails.scss');

import React from 'react';
import Thumbnail from './Thumbnail';

// class Thumbnail extends React.Component {
//     render() {
//         return (
//             <li>

//             </li>
//         );
//     }
// }

// class Thumbnails extends React.Component {
//   render() {
//     return (

//     )
//   }
// }

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