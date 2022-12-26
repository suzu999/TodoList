// @ts-ignore
import React from 'react';
import './TodoItem.css';

interface Props {
  text: string;
  checked: boolean;
  id: number;

  onToggle(id: number): void;

  onRemove(id: number): void
}


const TodoItem = ({text, checked, id, onToggle, onRemove}: Props) => {
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div className="remove" onClick={(e) => {
        onRemove(id);
        e.stopPropagation();
      }}>&times;</div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {checked && (<div className="check-mark">✓</div>)}
    </div>
  );
}

export default TodoItem;