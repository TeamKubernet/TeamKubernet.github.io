import React from 'react';

//  Child component
import Button from './util/Button';

//  Assets
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={logo} />
        <p>kubernét</p>
      </div>
      <div>
        <Button>about us</Button>
        <Button>github</Button>
      </div>
    </nav>
  );
};

export default NavBar;
