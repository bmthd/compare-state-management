import { Todo } from "@/types";
import { useCallback } from "react";
import { create } from "zustand";

type TodoState = {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: number) => void;
  update: (id: number, todo: Todo) => void;
};

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  add: (todo: Todo) =>
    set((state: TodoState) => ({ todos: [...state.todos, todo] })),
  remove: (id: number) =>
    set((state: TodoState) => ({
      todos: state.todos.filter((_, i) => i !== id),
    })),
  update: (id: number, todo: Todo) =>
    set((state: TodoState) => ({
      todos: state.todos.map((t, i) => (i === id ? todo : t)),
    })),
}));

export const useTodo = () => {
  const { todos, add, remove, update } = useTodoStore();
  const todoIds = todos.map((_, i) => i);

  const useTodoValue = (index: number) => {
    return todos[index];
  };

  const addTodo = useCallback((todo: Todo) => add(todo), []);

  const removeTodo = useCallback((id: number) => remove(id), []);

  const updateTodo = useCallback(
    (id: number, todo: Todo) => update(id, todo),
    []
  );

  return {
    todoIds,
    useTodoValue,
    addTodo,
    removeTodo,
    updateTodo,
  };
};
