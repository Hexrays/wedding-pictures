import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Image extends React.Component{

  componentWillMount() {
    this.setState({
      loaded: false
    });
  }

  onImageLoad (x) {
    // if (this.isMounted()) {
      // this.setState({ loaded: true });
    // }
    // console.log(this,x);
    const imgHeight = 200;
    const ratio     = x.width/x.height;
    let imgWidth    = imgHeight * ratio;
    this.setState({
      height : imgHeight,
      width  : imgWidth,
      loaded : true
    });

  }

  componentDidMount () {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    var img = new window.Image();
    img.onload = () => {this.onImageLoad(img)};
    img.src = imgSrc;
    // const imgHeight = 200;
    // const ratio     = img.width/img.height;
    // let imgWidth    = imgHeight * ratio;
  }

  render () {
    var { className, ...props } = this.props;
    var {height, width} = this.state;
    var rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded
    });
    return (
      <img ref="img" {...props} width={width} height={height} className={rootClassName} />
    );
  }
}

export default Image;
