import React, { useRef } from 'react';
import { useTodo } from '../store/useTodo';

function TodoForm() {
  const { addNewTodo } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current!.value;

    addNewTodo(value);

    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type is Something" ref={inputRef} />
    </form>
  );
}

export { TodoForm };
