import React from 'react';

const Thumbnail = ({
    thumb
}) => (
    <div style={{
        height:'200px',
        width: '200px',
        float: 'left',
        margin: '5px',
        backgroundImage: `url(${thumb})`,
        backgroundSize: 'cover',
        border: '1px solid black'
    }} >
    </div>
);

export default Thumbnail;