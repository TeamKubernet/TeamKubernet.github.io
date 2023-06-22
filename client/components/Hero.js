import React from 'react';

import styles from './Hero.module.scss';

import Button from './util/Button';

import Gif from '../assets/WineSwirl.gif';

const Hero = () => {
  return (
    <div className={styles.div}>
      <img src={Gif} className={styles.img} />
      <h1 className={styles.h1}>Kubernét</h1>
      <a href='https://github.com/oslabs-beta/Kubernet'>
        <Button className={styles.button}>Get Started</Button>
      </a>
    </div>
  );
};
export default Hero;
