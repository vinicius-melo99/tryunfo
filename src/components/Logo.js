import React from 'react';
import logoTryunfo from '../img/logo_tryunfo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img src={ logoTryunfo } className="main-logo" alt="logo do jogo" />
      </div>
    );
  }
}

export default Logo;
