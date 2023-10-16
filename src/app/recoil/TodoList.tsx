"use client";

import { TodoCard } from "@/components/TodoCard";
import { useTodo } from "./state";

export const TodoList = () => {
  const { todoIds } = useTodo();
  return (
    <>
      {todoIds.map((id, i) => {
        return <TodoCard key={i} id={id} />;
      })}
    </>
  );
};
