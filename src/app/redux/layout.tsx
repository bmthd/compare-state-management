"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { todoReducer } from "./redux";

const layout = ({ children }: { children: React.ReactNode }) => {
  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
  });
  return <Provider store={store}>{children}</Provider>;
};

export default layout;
