"use client";

import { Todo } from "@/types";
import { FormEventHandler, useCallback } from "react";

type Props = {
  onClick: (todo: Todo) => void;
};

export const AddTodoForm = ({ onClick }: Props) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const todo: Todo = {
        text: String(formData.get("todo")),
        isComplete: false,
      };
      onClick(todo);
      e.currentTarget.reset();
    },
    [onClick]
  );

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
