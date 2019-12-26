import React from 'react';

import style from './Loader.module.css';

const Loader = ({color}) => (
<div className={style["lds-ripple"]}>
  <div style={color ? {borderColor: color} : null}></div>
  <div style={color ? {borderColor: color} : null}></div>
</div>);

export default Loader;