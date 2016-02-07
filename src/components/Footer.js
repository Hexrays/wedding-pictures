require('styles/Footer.scss');

import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.children}
        <div className="hex-footer">
          <p className="hex-message">Made with <span className="hex-heart">love</span> by Hexrays</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
