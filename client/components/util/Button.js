import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${styles.button}`}>
      {props.children}
    </button>
  );
};

export default Button;
