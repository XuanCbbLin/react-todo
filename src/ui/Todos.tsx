import { useTodo } from '../store/useTodo';

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
                className="pl-2 w-[250px] h-[30px] rounded-[5px] outline-none border-2 border-[#393e46] transition duration-500 mb-[10px]"
                onChange={e => updateEditingTodoContent(todo.id, e.target.value)}
              />
              <button
                className="bg-[#5cf416] rounded-[5px] ml-2 px-2 py-1"
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
                className="bg-[#b6e2a1] rounded-[5px] ml-2 px-3 py-1 mb-3"
                onClick={() => toggleCompleteTodo(todo.id)}
              >
                Complete
              </button>
              <button
                className=" bg-[#F2DA05] rounded-[5px] ml-2 px-3 py-1 mb-3"
                onClick={() => toggleEditTodo(todo.id)}
              >
                Edit
              </button>
              <button
                className="bg-[#ff8fb1] rounded-[5px] ml-2 px-3 py-1 mb-3"
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
