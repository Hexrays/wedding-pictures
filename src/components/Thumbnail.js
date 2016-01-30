import React from 'react';

import Image from './Image';


class Thumbnail extends React.Component {
  componentWillMount() {

  }

  render() {
    const {width, height} = this.props;

    const maxImgHeight = 200;
    const ratio     = width/height;
    let imgWidth    = maxImgHeight * ratio;

    return (
      <div style={{
          height          : `${maxImgHeight}px`,
          width           : `${imgWidth}px`,
          float           : 'left',
          margin          : '5px',
          border          : '1px solid black',
          backgroundColor : '#aaa'
      }} >
        <Image style={{verticalAlign:'middle'}} src={this.props.src}
          {...this.props} />

      </div>
    );
  }
}

export default Thumbnail;
