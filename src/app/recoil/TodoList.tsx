"use client";

import { TodoCard } from "@/app/recoil/TodoCard";
import { useTodo } from "./recoil";

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
