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
    toggleCompleteTodo: (todoId: string) => void;
    deleteTodo: (todoId: string) => void;
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

const toggleCompleteTodo = (todos: Todos[], todoId: string) => {
    const newTodo = todos.map((todo) => (todo.id === todoId ? { ...todo, complete: true } : todo));

    return newTodo;
};

const deleteTodo = (todos: Todos[], todoId: string) => {
    const newTodo = todos.filter((todo) => todo.id !== todoId);

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
    toggleCompleteTodo(todoId: string) {
        set((state) => ({
            ...state,
            todos: toggleCompleteTodo(state.todos, todoId),
        }));
    },
    deleteTodo(todoId) {
        set((state) => ({
            ...state,
            todos: deleteTodo(state.todos, todoId),
        }));
    },
}));

export { useTodo };
