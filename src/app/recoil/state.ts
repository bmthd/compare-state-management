import { Todo } from "@/types";
import { atom, atomFamily, useRecoilCallback, useRecoilValue } from "recoil";

const todoIdsAtom = atom({
  key: "todoIds",
  default: [] as number[],
});

const defaultTodo: Todo = {
  text: "",
  isComplete: false,
};

const todoFamily = atomFamily<Todo, number>({
  key: "todo",
  default: defaultTodo,
});

export const useTodo = () => {
  const todoIds = useRecoilValue(todoIdsAtom);

  const getTodo = useRecoilCallback(({ snapshot }) => (id: number) => {
    return snapshot.getLoadable(todoFamily(id)).getValue();
  });

  const addTodo = useRecoilCallback(({ set, snapshot }) => (todo: Todo) => {
    const ids = snapshot.getLoadable(todoIdsAtom).getValue();
    const id = Math.max(...ids) + 1;
    set(todoIdsAtom, (prev) => [...prev, id]);
    set(todoFamily(id), todo);
  });

  const deleteTodo = useRecoilCallback(({ set }) => (id: number) => {
    set(todoIdsAtom, (prev) => prev.filter((i) => i !== id));
    set(todoFamily(id), defaultTodo);
  });

  const updateTodo = useRecoilCallback(
    ({ set }) =>
      (id: number, todo: Todo) => {
        set(todoFamily(id), todo);
      }
  );

  return {
    todoIds,
    getTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
