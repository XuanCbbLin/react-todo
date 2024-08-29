interface Todo {
  id: string;
  todoContent: string;
  complete: boolean;
  edit: boolean;
}

interface TodoState {
  todos: Todo[];
}

interface Action {
  type: string;
  payload: {
    todo: Todo[];
  };
}

export const initState: TodoState = {
  todos: [],
};

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_COMPLETE_TODO: 'TOGGLE_COMPLETE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_EDIT_TODO: 'TOGGLE_EDIT_TODO',
  UPDATE_EDITING_TODO_CONTENT: 'UPDATE_EDITING_TODO_CONTENT',
} as const;

const todoReducer = (state: TodoState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.TOGGLE_EDIT_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.UPDATE_EDITING_TODO_CONTENT:
      return {
        ...state,
        todos: payload.todo,
      };
    default:
      return state;
  }
};

export default todoReducer;
