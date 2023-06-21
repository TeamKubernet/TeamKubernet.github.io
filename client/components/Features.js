import React from 'react';

import styles from './Features.module.scss';

import Card from './util/Card';
import UI from '../assets/UI.gif';
import install from '../assets/install.gif';
import dashboard from '../assets/dashboard.gif';

const Features = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>Features:</h2>

      <div className={styles.container}>
        <Card>
          <img src={UI} className={styles.img} />
        </Card>
        <p className={styles.p}>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quo
          animi, ipsam, tenetur vero nobis accusamus magni eaque praesentium
          tempore et tempora recusandae libero ut. Eos, soluta. Vitae, veniam
          sed.
        </p>
      </div>

      <div className={styles.container}>
        <p className={styles.p}>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quo
          animi, ipsam, tenetur vero nobis accusamus magni eaque praesentium
          tempore et tempora recusandae libero ut. Eos, soluta. Vitae, veniam
          sed.
        </p>
        <Card>
          <img src={install} className={styles.img} />
        </Card>
      </div>

      <div className={styles.container}>
        <Card>
          <img src={dashboard} className={styles.img} />
        </Card>
        <p className={styles.p}>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quo
          animi, ipsam, tenetur vero nobis accusamus magni eaque praesentium
          tempore et tempora recusandae libero ut. Eos, soluta. Vitae, veniam
          sed.
        </p>
      </div>
    </div>
  );
};

export default Features;
