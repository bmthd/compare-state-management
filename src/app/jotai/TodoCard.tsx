import { useTodo } from "@/app/jotai/jotai";
import { NotifyRerender } from "@/components/NofigyRerender";
import { memo } from "react";

type Props = {
  id: number;
};

export const TodoCard = memo(function TodoCard({ id }: Props) {
  const { useTodoValue, updateTodo, removeTodo } = useTodo();
  const todo = useTodoValue(id);
  const { text, isComplete } = todo;

  const handleChange = () => {
    updateTodo(id, {
      ...todo,
      isComplete: !isComplete,
    });
  };

  const handleClick = () => {
    removeTodo(id);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
        <input type="checkbox" checked={isComplete} onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleClick}>
          削除
        </button>
      </div>
      <NotifyRerender />
    </div>
  );
});
