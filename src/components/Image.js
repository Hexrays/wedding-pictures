import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component{

  componentWillMount() {
    this.setState({
      loaded: false
    });
  }

  onImageLoad () {
    this.setState({
      loaded : true
    });
  }

  componentDidMount () {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    this.img = new window.Image();
    this.img.onload = () => {this.onImageLoad()};
    this.img.src = imgSrc;
  }

  componentWillUnmount() {
    this.img.onload = null;
  }

  render () {
    var { ...props } = this.props;
    // var {height, width} = this.state;
    var style = this.state.loaded ? {opacity:1} : {opacity:0, transition: 'opacity 0.25s'}
    return (
      <img ref="img" {...props} style={style} />
    );
  }
}

export default Image;
