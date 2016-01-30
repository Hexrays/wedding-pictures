import React from 'react';

// import Image from './Image';


// const Thumbnail = ({
//     thumb
// }) => (

// );

class Thumbnail extends React.Component {
  componentWillMount() {

    // console.log(thumb);
  }

  render() {
    const {src, width, height} = this.props;
    // let img       = new Image();
    // img.src         = thumb;
    const maxImgHeight = 200;
    const ratio     = width/height;
    let imgWidth    = maxImgHeight * ratio;

    // console.log();

    return (
      <div style={{
          height:`${maxImgHeight}px`,
          width: `${imgWidth}px`,
          float: 'left',
          margin: '5px',
          // backgroundImage: `url(${thumb})`,
          // backgroundSize: 'cover',
          border: '1px solid black'
      }} >
        <Image style={{verticalAlign:'middle'}}
          src={src}
          height={height}
          width={width} />

      </div>
    );
  }
}

export default Thumbnail;
