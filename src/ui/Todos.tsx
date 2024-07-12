import { useTodo } from '../store/useTodo';

function Todos() {
  const { todos, toggleCompleteTodo } = useTodo();

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.edit ? (
            <div>
              <input value={todo.todoContent} />
              <button className="bg-[#5cf416] rounded-[5px] ml-2">Save</button>
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
              <button className=" bg-[#F2DA05] rounded-[5px] ml-2 px-3 py-1 mb-3">Edit</button>
              <button className="bg-[#ff8fb1] rounded-[5px] ml-2 px-3 py-1 mb-3">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export { Todos };
