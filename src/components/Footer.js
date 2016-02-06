require('styles/Footer.scss');

import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.children}
        <p>Made by Hexrays</p>
      </footer>
    );
  }
}

export default Footer;
