import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants/request.constants";
import { ICategory } from "../../interfaces-types/categories.interface";
import { getCategories } from "../../requests/categories.request";

export const getCategoriesReducer = createAsyncThunk(
  "categories/get",
  async (_, { rejectWithValue }) => {
    const categories: ICategory[] | null = await getCategories();
    if (categories) {
      return categories;
    } else {
      return rejectWithValue("Categories request error!");
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    status: "",
    categories: [] as ICategory[],
    chosenCategory: {} as ICategory,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesReducer.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    });
    builder.addCase(getCategoriesReducer.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.succes;
      state.categories = action.payload;
    });
    builder.addCase(getCategoriesReducer.rejected, (state) => {
      state.status = REQUEST_STATUS.error;
    });
  },
});

export default categoriesSlice.reducer;
