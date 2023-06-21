import React from 'react';

import styles from './Team.module.scss';

import jimmy from '../assets/jimmy.jpg';
import joseph from '../assets/joseph.jpg';
import praise from '../assets/praise.jpg';
import paul from '../assets/paul.jpg';

import Member from './Member';

const Team = () => {
  return (
    <div className={styles.div} id='team'>
      <h2 className={styles.h2}>Meet the Team</h2>
      <div className={styles.container}>
        <Member
          src={jimmy}
          name='Jimmy Tran'
          l='https://www.linkedin.com/in/jimmytran48/'
          g='https://github.com/JimmyTran48'
        />
        <Member
          src={praise}
          name='Praise Emmanuel'
          l='https://www.linkedin.com/in/praiseemmanuel/'
          g='https://github.com/praisepelumi'
        />
        <Member
          src={paul}
          name='Paul Lee'
          l='https://www.linkedin.com/in/paaoul/'
          g='https://github.com/paaoul'
        />
        <Member
          src={joseph}
          name='Joseph Caballero'
          l='https://www.linkedin.com/in/joseph-w-caballero/'
          g='https://github.com/Joseph-Caballero'
        />
      </div>
    </div>
  );
};

export default Team;
