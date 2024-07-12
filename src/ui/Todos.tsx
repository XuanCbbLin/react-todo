import { useTodo } from '../store/useTodo';

function Todos() {
  const { todos } = useTodo();

  return (
    <div>
      <p>Todos</p>
    </div>
  );
}

export { Todos };
