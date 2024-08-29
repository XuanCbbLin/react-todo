import { createContext, useReducer, useContext, ReactNode } from 'react';
import TodoReducer, { ACTIONS, initState } from './TodoReducer';

interface Todos {
  id: string;
  todoContent: string;
  complete: boolean;
  edit: boolean;
}

interface TodoState {
  todos: Todos[];
}

interface TodoContextProps extends TodoState {
  addNewTodo: (todoContent: string) => void;
  toggleCompleteTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  toggleEditTodo: (todoId: string) => void;
  updateEditingTodoContent: (todoId: string, todoContent: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addNewTodo: () => {},
  toggleCompleteTodo: () => {},
  deleteTodo: () => {},
  toggleEditTodo: () => {},
  updateEditingTodoContent: () => {},
});

interface TodoProviderProps {
  children: ReactNode;
}

const todoObj = (todoContent: string) => {
  return {
    id: crypto.randomUUID(),
    todoContent,
    complete: false,
    edit: false,
  };
};

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  const addNewTodo = (todoContent: string) => {
    const todo = todoObj(todoContent);
    const newTodo = state.todos.concat(todo);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const toggleCompleteTodo = (todoId: string) => {
    const newTodo = state.todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });

    dispatch({
      type: ACTIONS.TOGGLE_COMPLETE_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const deleteTodo = (todoId: string) => {
    const newTodo = state.todos.filter(todo => todo.id !== todoId);

    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const toggleEditTodo = (todoId: string) => {
    const newTodo = state.todos.map(todo => (todo.id === todoId ? { ...todo, edit: !todo.edit } : todo));

    dispatch({
      type: ACTIONS.TOGGLE_EDIT_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const updateEditingTodoContent = (todoId: string, todoContent: string) => {
    const newTodo = state.todos.map(todo => (todo.id === todoId ? { ...todo, todoContent } : todo));

    dispatch({
      type: ACTIONS.UPDATE_EDITING_TODO_CONTENT,
      payload: {
        todo: newTodo,
      },
    });
  };

  const value = {
    todos: state.todos,
    addNewTodo,
    toggleCompleteTodo,
    deleteTodo,
    toggleEditTodo,
    updateEditingTodoContent,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    console.log('Error'); //....
  }

  return context;
};
