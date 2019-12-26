import React, { Fragment } from 'react';
import style from './Account.module.css';

const signInForm = (props) => {
  const inputRefs = {
    username: '',
    password: ''
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValues = {};
    Object.keys(inputRefs).forEach( inputName => inputValues[inputName] = inputRefs[inputName].value);
    props.onSubmit(inputValues);
  }

  return (
    <Fragment>
      {props.error && <div className={style.error}>{props.error}</div>}
      <form className={style["register-form"]} onSubmit={onSubmit}>
        <input type="text" placeholder="Username" ref={ref => inputRefs.username = ref}/>
        <input type="password" placeholder="Password" ref={ref => inputRefs.password = ref}/>
        <button className="button-primary">Submit</button>
      </form>
    </Fragment>
  );
}

export default signInForm; 