import React from 'react';

import style from './index.module.css';

const message = ({message, username, history, userId, date}) => {
   return (
    <li className={style['message-container']}>
      <div className={style["inner-container"]}>
        <div onClick={() => {
          history.push(`/user/${userId}`)
        }} className={style.user}>{username ? username.toString() : "Annon"}</div>
        <time>{date}</time>
      </div>
      <div className={style.message}>{message.toString()}</div>
    </li>);
}

export default message;