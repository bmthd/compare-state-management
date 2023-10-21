"use client";

import { Todo } from "@/types";
import { FormEventHandler } from "react";
import { useTodo } from "./zustand";

export const AddTodoForm = () => {
  const { addTodo } = useTodo();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const todo: Todo = {
      text: String(formData.get("todo")),
      isComplete: false,
    };
    addTodo(todo);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        name="todo"
        defaultValue=""
        placeholder="Todoを入力してください"
        className="input input-bordered"
      />
      <button type="submit" className="btn">
        Add Todo
      </button>
    </form>
  );
};
