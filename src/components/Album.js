import React from 'react';
import {Link} from 'react-router';

const Album = ({
    id, title, count, desc, thumbnail
}) => (
  <li className="album">
      <Link to={`album/${id}`} >
        <img className="album__thumbnail" src={thumbnail} />
        <h4 className="album__title brandon">{title}</h4>
        <p className="album__count">{count}</p>
        <div className="album__hover"><p className="album__desc brandon">{desc}</p></div>
      </Link>
  </li>
);

export default Album;
