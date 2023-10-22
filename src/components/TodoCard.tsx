import { NotifyRerender } from "@/components/NofigyRerender";
import { Todo } from "@/types";
import { memo } from "react";

type Props = {
  todo: Todo;
  onClick: (id: number) => void;
  onChange: (id: number) => void;
};

export const TodoCard = memo(function TodoCard({
  todo,
  onChange,
  onClick,
}: Props) {
  const { text, isComplete } = todo;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
        <input type="checkbox" checked={isComplete} onChange={() => onChange} />
        <button className="btn btn-primary" onClick={() => onClick}>
          削除
        </button>
      </div>
      <NotifyRerender />
    </div>
  );
});
