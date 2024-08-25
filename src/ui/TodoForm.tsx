import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../features/todoSlice';

function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current!.value;

    dispatch(addNewTodo(value));

    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Type is Something"
        className="mb-[10px] h-[30px] w-[250px] rounded-[5px] border-2 border-[#393e46] pl-2 outline-none transition duration-500"
        ref={inputRef}
      />
    </form>
  );
}

export { TodoForm };
