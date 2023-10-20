import { Todo } from "@/types";
import { create } from "zustand";

type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
};

const useStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo: Todo) =>
    set((state: TodoState) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id: number) =>
    set((state: TodoState) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (id: number, todo: Todo) =>
    set((state: TodoState) => ({
      todos: state.todos.map((t) => (t.id === id ? todo : t)),
    })),
}));

export const useTodo = () => {
  const todos = useStore((state) => state.todos);
  const todoIds = todos.map((_, i) => i);

  const useTodoValue = (index: number) => {
    return todos[index];
  };

  const addTodo = (todo: Todo) => {
    useStore.setState((state) => ({ todos: [...state.todos, todo] }));
  };

  const deleteTodo = (id: number) => {
    useStore.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  const updateTodo = (id: number, todo: Todo) => {
    useStore.setState((state) => ({
      todos: state.todos.map((t) => (t.id === id ? todo : t)),
    }));
  };

  return {
    todoIds,
    useTodoValue,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
