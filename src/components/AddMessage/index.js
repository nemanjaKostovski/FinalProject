import React from 'react';
import style from './index.module.css';

const AddMessage = props => {
  let textRef; 
  return (
    <div className={style.addMessage}>
      <textarea ref={ref => textRef = ref }></textarea>
      <button onClick={() => props.onClick(textRef.value)} className="button-primary">POST</button>
    </div>
  );
}

export default AddMessage;