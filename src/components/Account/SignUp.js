import React, { Fragment } from 'react';
import style from './Account.module.css';

const SignUp = (props) => {

  const inputRefs = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValues = {};
    // get values from inputRefs and place them in inputValues obj.
    Object.keys(inputRefs).forEach( inputName => inputValues[inputName] = inputRefs[inputName].value);

    props.onSubmit(inputValues);
  }

  return (
    <Fragment>
      {props.error && <div className={style.error}>{props.error}</div>}
      <form className={style["register-form"]} onSubmit={onSubmit}>
        <input type="text" placeholder="Name"  ref={(ref) => inputRefs.name = ref} /> 
        <input type="text" placeholder="Last Name"  ref={(ref) => inputRefs.surname = ref} /> 
        <input type="text" placeholder="User Name"  ref={(ref) => inputRefs.username = ref} /> 
        <input type="text" placeholder="Email"  ref={(ref) => inputRefs.email = ref} /> 
        <input type="password" placeholder="Password"  ref={(ref) => inputRefs.password = ref} /> 
        <input type="password" placeholder="Confirm Password"  ref={(ref) => inputRefs.confirmPassword = ref} />
        <button className="button-primary">Submit</button>
      </form>
    </Fragment>
  );
};

export default SignUp;