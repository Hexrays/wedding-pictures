import React from 'react';

// const Thumbnail = ({
//     thumb
// }) => (

// );

class Thumbnail extends React.Component {
  componentWillMount() {

    // console.log(thumb);
  }

  render() {
    const {thumb} = this.props;
    let img = new Image();
    img.src = thumb;
    const imgHeight = 200;
    const ratio = img.width/img.height;
    let imgWidth = imgHeight * ratio;

    // console.log();

    return (
      <div style={{
          // height:{height}'px',
          // width: '200px',
          float: 'left',
          margin: '5px',
          // backgroundImage: `url(${thumb})`,
          // backgroundSize: 'cover',
          border: '1px solid black'
      }} >
        <img style={{verticalAlign:'middle'}} src={thumb} height={imgHeight} width={imgWidth} />

      </div>
    );
  }
}

export default Thumbnail;
