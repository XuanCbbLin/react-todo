import { createSlice } from '@reduxjs/toolkit';

const todoObj = (todoContent: string) => {
  return {
    id: crypto.randomUUID(),
    todoContent,
    complete: false,
    edit: false,
  };
};

export interface Todos {
  id: string;
  todoContent: string;
  complete: boolean;
  edit: boolean;
}

const initialState: {
  todos: Todos[];
} = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      const todo = todoObj(action.payload);
      const newTodo = state.todos.concat(todo);

      state.todos = newTodo;
    },
    toggleCompleteTodo: (state, action) => {
      const newTodo = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
      );

      state.todos = newTodo;

      console.log(state.todos);
    },
    deleteTodo: (state, action) => {
      const newTodo = state.todos.filter(todo => todo.id !== action.payload);

      state.todos = newTodo;
    },
    toggleEditTodo: (state, action) => {
      const newTodo = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, edit: !todo.edit } : todo
      );

      state.todos = newTodo;
    },
    updateEditingTodoContent: (state, action) => {
      const newTodo = state.todos.map(todo =>
        todo.id === action.payload.todoId ? { ...todo, todoContent: action.payload.todoContent } : todo
      );

      state.todos = newTodo;
    },
  },
});

export const { addNewTodo, toggleCompleteTodo, deleteTodo, toggleEditTodo, updateEditingTodoContent } =
  todoSlice.actions;

export default todoSlice.reducer;
