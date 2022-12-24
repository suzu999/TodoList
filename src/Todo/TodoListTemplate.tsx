import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}: {form: ReactNode , children: ReactNode})  =>  {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        { form }
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;