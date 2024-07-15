import { useTodo } from '../state/useTodo';

function Todos() {
  const { todos, toggleCompleteTodo, deleteTodo, toggleEditTodo, updateEditingTodoContent } = useTodo();

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.edit ? (
            <div>
              <input
                value={todo.todoContent}
                className="mb-[10px] h-[30px] w-[250px] rounded-[5px] border-2 border-[#393e46] pl-2 outline-none transition duration-500"
                onChange={e => updateEditingTodoContent(todo.id, e.target.value)}
              />
              <button
                className="ml-2 rounded-[5px] bg-[#5cf416] px-2 py-1"
                onClick={() => toggleEditTodo(todo.id)}
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              <span
                style={{
                  textDecoration: todo.complete ? 'line-through' : '',
                }}
              >
                {todo.todoContent}
              </span>
              <button
                className="mb-3 ml-2 rounded-[5px] bg-[#b6e2a1] px-3 py-1"
                onClick={() => toggleCompleteTodo(todo.id)}
              >
                Complete
              </button>
              <button
                className="mb-3 ml-2 rounded-[5px] bg-[#F2DA05] px-3 py-1"
                onClick={() => toggleEditTodo(todo.id)}
              >
                Edit
              </button>
              <button
                className="mb-3 ml-2 rounded-[5px] bg-[#ff8fb1] px-3 py-1"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export { Todos };
