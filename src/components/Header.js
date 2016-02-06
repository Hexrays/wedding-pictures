require('styles/Header.scss');

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className={this.props.tag}>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
