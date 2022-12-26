import React from "react";
import './Form.css';


const Form = (value: string) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }
  const onCreate = () => {
  }
  const onKeyPress = (k: React.KeyboardEvent<HTMLInputElement>) => {
  }

  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>

  );
};

export default Form;