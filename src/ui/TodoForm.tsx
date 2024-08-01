import React, { useRef } from 'react';
import { useTodo } from '../state/useTodo';
// import { useShallow } from 'zustand/react/shallow';

function TodoForm() {
  const { addNewTodo } = useTodo();
  // 練習 useShallow 避免 component rerender
  // const { addNewTodo } = useTodo(useShallow(state => ({ addNewTodo: state.addNewTodo })));

  console.log('TodoForm re-render');

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
        className="mb-[10px] h-[30px] w-[250px] rounded-[5px] border-2 border-[#393e46] pl-2 outline-none transition duration-500"
        ref={inputRef}
      />
    </form>
  );
}

export { TodoForm };
