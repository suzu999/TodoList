import React from 'react'
import "./App.css";
import TodoListTemplate from './Todo/TodoListTemplate';
import Form from './Todo/Form';



function App() {
  return (
    <TodoListTemplate form={Form("")}>
      템플릿완성
    </TodoListTemplate>
  );
}

export default App;
