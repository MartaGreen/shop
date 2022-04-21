import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
