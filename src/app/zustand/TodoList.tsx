"use client";

import { TodoCard } from "./TodoCard";
import { useTodo } from "./zustand";

export const TodoList = () => {
  const { todoIds } = useTodo();
  return (
    <>
      {todoIds.map((id) => {
        return <TodoCard key={id} id={id} />;
      })}
    </>
  );
};
