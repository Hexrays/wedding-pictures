import React from 'react';
import {Link} from 'react-router';

      // <Link to={`album/${id}`} >

const Album = ({
    id, title, count, folder
}) => (
  <li className="album">
      <Link to={`album/${id}`} >
          <h4>{title}</h4>
        <p>Count: {count}</p>
        <img src={`${folder}/001.jpg`} />
      </Link>
  </li>
);

export default Album;
