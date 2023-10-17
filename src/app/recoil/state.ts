import { Todo } from "@/types";
import { atom, atomFamily, useRecoilCallback, useRecoilValue } from "recoil";

const todoIdsAtom = atom<number[]>({
  key: "todoIds",
  default: [],
});

const defaultTodo: Todo = {
  text: "",
  isComplete: false,
};

const todoFamily = atomFamily<Todo, number | null>({
  key: "todo",
  default: defaultTodo,
});

export const useTodo = () => {
  const todoIds = useRecoilValue(todoIdsAtom);

  const useTodoValue = (id: number) => {
    const todo = useRecoilValue(todoFamily(id));
    return todo;
  };

  const addTodo = useRecoilCallback(
    ({ set, snapshot }) =>
      (todo: Todo) => {
        const ids = snapshot.getLoadable(todoIdsAtom).getValue();
        const id = ids.length === 0 ? 0 : Math.max(...ids) + 1;
        set(todoFamily(id), todo);
        set(todoIdsAtom, (prev) => [...prev, id]);
      },
    []
  );

  const deleteTodo = useRecoilCallback(
    ({ set, reset }) =>
      (id: number) => {
        set(todoIdsAtom, (prev) => prev.filter((i) => i !== id));
        reset(todoFamily(id));
      },
    []
  );

  const updateTodo = useRecoilCallback(
    ({ set }) =>
      (id: number, todo: Todo) => {
        set(todoFamily(id), todo);
      },
    []
  );

  return {
    todoIds,
    useTodoValue,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
