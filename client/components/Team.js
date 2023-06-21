import React from 'react';

import styles from './Team.module.scss';

import jimmy from '../assets/jimmy.jpg';
import joseph from '../assets/joseph.jpg';
import praise from '../assets/praise.jpg';
import paul from '../assets/paul.jpg';

import Member from './Member';

const Team = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>Meet the Team</h2>
      <div className={styles.container}>

        <Member src={jimmy} name='Jimmy Tran' />
        <Member src={praise} name='Praise Emmanuel' />
        <Member src={paul} name='Paul Lee' />
        <Member src={joseph} name='Joseph Caballero' />

      </div>
    </div>
  );
};

export default Team;
