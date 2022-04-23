import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import goodsListSlice from "./slices/goodsListSlice";
import goodDetailsSlice from "./slices/goodDetailsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    goods: goodsListSlice,
    goodDetails: goodDetailsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
