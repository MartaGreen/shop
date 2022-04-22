import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants/request.constants";
import {
  ICategory,
  ISubCategory,
} from "../../interfaces-types/categories.interface";
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

function findSubCategory(categories: ICategory[], categoryId: string) {
  const chosenCategory = categories.filter(
    (category) => category.id === categoryId
  )[0];
  return chosenCategory.subCategories;
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    status: "",
    categories: [] as ICategory[],
    chosenCategory: [] as ISubCategory[],
    chosenCategoryId: "",
  },
  reducers: {
    updateChosenCategory: (state, action) => {
      state.chosenCategory = findSubCategory(state.categories, action.payload);
      state.chosenCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoriesReducer.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    });
    builder.addCase(getCategoriesReducer.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.succes;
      state.categories = action.payload;
      state.chosenCategory = action.payload[0].subCategories;
      state.chosenCategoryId = action.payload[0].id;
    });
    builder.addCase(getCategoriesReducer.rejected, (state) => {
      state.status = REQUEST_STATUS.error;
    });
  },
});

export const { updateChosenCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
