"use client";

import { TodoCard } from "@/components/TodoCard";
import { useTodo } from "./state";

export const TodoList = () => {
  const { useTodoIds } = useTodo();
  const todoIds = useTodoIds();
  return (
    <>
      {todoIds.map((id) => {
        return <TodoCard key={id} id={id} />;
      })}
    </>
  );
};
