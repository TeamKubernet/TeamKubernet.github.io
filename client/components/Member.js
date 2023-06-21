import React from 'react';

import styles from './Member.module.scss';

import LinkedIn from '../assets/in.png';
import GitHub from '../assets/github.png';


const Member = (props) => {
  return (
    <div className={styles.member}>
      <img src={props.src} className={styles.pic} />
      <p className={styles.name}>{props.name}</p>
      <div className={styles.socials}>
        <img src={LinkedIn} />
        <img src={GitHub} />
      </div>
    </div>
  );
};

export default Member;
