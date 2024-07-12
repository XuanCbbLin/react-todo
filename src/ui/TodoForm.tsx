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
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Type is Something"
        className="pl-2 w-[250px] h-[30px] rounded-[5px] outline-none border-2 border-[#393e46] transition duration-500 mb-[10px]"
        ref={inputRef}
      />
    </form>
  );
}

export { TodoForm };
