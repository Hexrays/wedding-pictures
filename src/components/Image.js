import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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
    var img = new window.Image();
    img.onload = () => {this.onImageLoad()};
    img.src = imgSrc;
  }

  render () {
    var { className, ...props } = this.props;
    // var {height, width} = this.state;
    var rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded
    });
    return (
      <img ref="img" {...props} className={rootClassName} />
    );
  }
}

export default Image;
