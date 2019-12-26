import React from 'react';
import style from './index.module.css';
import image from '../../assets/images/add.png'

const addButton = ({onClick}) => {
  return (
    <img onClick={onClick} className={style.image} src={image} alt='add topic'/>
  );
}

export default addButton;