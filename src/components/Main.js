require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from './Header';
// import Thumbnails from './ThumbnailList';
import Footer from './Footer';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
