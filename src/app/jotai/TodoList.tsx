"use client";

import { TodoCard } from "@/app/jotai/TodoCard";
import { useTodo } from "./jotai";

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
