import { Todo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    },
    updateTodo: (state, action) => {
      const { index, todo } = action.payload;
      state[index] = todo;
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const useTodo = () => {
  const todos = useSelector((state: { todo: Todo[] }) => state.todo);
  const dispatch = useDispatch();
  const todoIds = todos.map((_, i) => i);

  const useTodoValue = (index: number) => {
    return todos[index];
  };

  const addTodo = useCallback(
    (todo: Todo) => {
      dispatch(todoSlice.actions.addTodo(todo));
    },
    [dispatch]
  );

  const removeTodo = useCallback(
    (index: number) => {
      dispatch(todoSlice.actions.removeTodo(index));
    },
    [dispatch]
  );

  const updateTodo = useCallback(
    (index: number, todo: Todo) => {
      dispatch(todoSlice.actions.updateTodo({ index, todo }));
    },
    [dispatch]
  );

  return {
    todoIds,
    useTodoValue,
    addTodo,
    removeTodo,
    updateTodo,
  };
};
