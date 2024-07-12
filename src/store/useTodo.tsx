import { create } from "zustand";

interface Todos {
    id: string;
    todoContent: string;
    complete: boolean;
    edit: boolean;
}

interface TodoState {
    todos: Todos[];
    addNewTodo: (todoContent: string) => void;
}

const todoObj = (todoContent: string) => {
    return {
        id: crypto.randomUUID(),
        todoContent,
        complete: false,
        edit: false,
    };
};

const addNewTodo = (todos: Todos[], todoContent: string) => {
    const todo = todoObj(todoContent);
    const newTodo = todos.concat(todo);

    return newTodo;
};

const useTodo = create<TodoState>((set) => ({
    todos: [],
    addNewTodo(todoContent: string) {
        set((state) => ({
            ...state,
            todos: addNewTodo(state.todos, todoContent),
        }));
    },
}));

export { useTodo };
