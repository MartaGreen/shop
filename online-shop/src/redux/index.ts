import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import goodsListSlice from "./slices/goodsListSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    goods: goodsListSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
