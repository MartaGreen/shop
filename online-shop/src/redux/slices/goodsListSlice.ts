import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants/request.constants";
import { IGood } from "../../interfaces-types/goods.interface";
import { getGoods } from "../../requests/goods.requests";

export const getGoodsReducer = createAsyncThunk(
  "goods/get",
  async (
    {
      categoryId,
      subCategoryId,
    }: { categoryId: string; subCategoryId: string },
    { rejectWithValue }
  ) => {
    const goods: IGood[] | null = await getGoods(categoryId, subCategoryId);
    if (goods) return goods;
    else return rejectWithValue("Goods request error!");
  }
);

const goodsListSlice = createSlice({
  name: "goods",
  initialState: {
    status: "",
    goods: [] as IGood[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGoodsReducer.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    });
    builder.addCase(getGoodsReducer.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.succes;
      state.goods = action.payload;
    });
    builder.addCase(getGoodsReducer.rejected, (state) => {
      state.status = REQUEST_STATUS.error;
    });
  },
});

export default goodsListSlice.reducer;
