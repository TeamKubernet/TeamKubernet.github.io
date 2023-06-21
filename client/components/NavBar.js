import React from 'react';

//  Child component
import Button from './util/Button';

//  Assets
import logo from '../assets/logo.png';

//  Styles
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} className={styles.img} />
        <p className={styles.title}>Kubernét</p>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button}>Home</Button>
        <a href='https://github.com/oslabs-beta/Kubernet'>
          <Button className={styles.button}>Get Started</Button>
        </a>
        <a href='#features'>
          <Button className={styles.button}>Features</Button>
        </a>
        <a href='#team'>
          <Button className={styles.button}>Team</Button>
        </a>
        {/* Button for GitHub */}
        {/* Button for LinkedIn */}
      </div>
    </nav>
  );
};

export default NavBar;
