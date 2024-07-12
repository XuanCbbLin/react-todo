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
    toggleEditTodo: (todoId: string) => void;
    updateEditingTodoContent: (todoId: string, todoContent: string) => void;
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
    const newTodo = todos.map((todo) => (todo.id === todoId ? { ...todo, complete: !todo.complete } : todo));

    return newTodo;
};

const deleteTodo = (todos: Todos[], todoId: string) => {
    const newTodo = todos.filter((todo) => todo.id !== todoId);

    return newTodo;
};

const toggleEditTodo = (todos: Todos[], todoId: string) => {
    const newTodo = todos.map((todo) => (todo.id === todoId ? { ...todo, edit: !todo.edit } : todo));

    return newTodo;
};

const updateEditingTodoContent = (todos: Todos[], todoId: string, todoContent: string) => {
    const newTodo = todos.map((todo) => (todo.id === todoId ? { ...todo, todoContent } : todo));

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
    toggleEditTodo(todoId) {
        set((state) => ({
            ...state,
            todos: toggleEditTodo(state.todos, todoId),
        }));
    },
    updateEditingTodoContent(todoId, todoContent) {
        set((state) => ({
            ...state,
            todos: updateEditingTodoContent(state.todos, todoId, todoContent),
        }));
    },
}));

export { useTodo };
