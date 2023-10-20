"use client";

import { TodoCard } from "@/app/redux/TodoCard";
import { useTodo } from "./redux";

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
