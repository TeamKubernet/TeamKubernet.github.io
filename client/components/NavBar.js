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
        <Button className={styles.button}>Features</Button>
        <Button className={styles.button}>Team</Button>
        {/* Button for GitHub */}
        {/* Button for LinkedIn */}
      </div>
    </nav>
  );
};

export default NavBar;
