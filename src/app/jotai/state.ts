import { Todo } from "@/types";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { useCallback } from "react";

const todosAtom = atom<Todo[]>([]);

const todosAtomsAtom = splitAtom(todosAtom);

export const useTodo = () => {
  const useTodoIds = () => {
    const todoAtoms = useAtomValue(todosAtomsAtom);
    const todoIds = todoAtoms.map((_, i) => i);
    return todoIds;
  };

  const useTodoValue = (index: number) => {
    const todoAtoms = useAtomValue(todosAtomsAtom);
    const todoAtom = todoAtoms[index];
    const todo = useAtomValue(todoAtom);
    return todo;
  };

  const setTodos = useSetAtom(todosAtom);

  const addTodo = useCallback(
    (todo: Todo) => {
      setTodos((prev) => [...prev, todo]);
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    (index: number) => {
      setTodos((prev) => prev.filter((_, i) => i !== index));
    },
    [setTodos]
  );

  const updateTodo = useCallback(
    (index: number, todo: Todo) => {
      setTodos((prev) => prev.map((t, i) => (i === index ? todo : t)));
    },
    [setTodos]
  );

  return {
    useTodoIds,
    useTodoValue,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
