import React, {  ChangeEventHandler, KeyboardEventHandler, ReactHTMLElement, ReactNode } from "react";
import './Form.css';


const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log("test");
}
const onCreate = ()=>{}
const onKeyPress = (k:React.KeyboardEvent<HTMLInputElement>)=>{}


const Form = (value: string) => {
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