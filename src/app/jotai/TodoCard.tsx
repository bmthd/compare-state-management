import { useTodo } from "@/app/jotai/jotai";

type Props = {
  id: number;
};

export const TodoCard = ({ id }: Props) => {
  const { useTodoValue, updateTodo, deleteTodo } = useTodo();
  const todo = useTodoValue(id);
  const { text, isComplete } = todo;

  const handleChange = () => {
    updateTodo(id, {
      ...todo,
      isComplete: !isComplete,
    });
  };

  const handleClick = () => {
    deleteTodo(id);
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
    </div>
  );
};