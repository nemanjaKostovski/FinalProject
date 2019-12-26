import React from 'react';
import style from './index.module.css';

const Section = (props) => {
  return (
    <section className={style["section-container"]}>
      {props.children}
    </section>
  );
}

export default Section;