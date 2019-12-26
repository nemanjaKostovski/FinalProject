import React from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.css';

const topic = (props) => {
  return (
    <li className={style['topic-container']}>
      <Link 
        to={{
          pathname: `/topic/${props.id}`,
          state: {
            title: props.title,
            date: new Date(props.timestamp).toLocaleDateString(),
            user: props.userId
          }
        }}
        className={style.link}
      >
        <h3>{props.title.toString()}</h3>
        <time>{new Date(props.timestamp).toLocaleDateString()}</time>
      </Link>
    </li>
  );
}

export default topic;