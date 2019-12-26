import React from 'react';
import style from './index.module.css';

const user = (props) => {

  return (
    <div className={style['user-container']}>
      {Object.keys(props).map(prop => (
        <div className={style.item}>
          <div>{prop}</div>
          <div>{props[prop]}</div>
        </div>
      ))}
    </div>
  );
}

export default user;