import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants/request.constants";
import { IGood } from "../../interfaces-types/goods.interface";
import { getGoodDetails } from "../../requests/goods.requests";
import { getGoodsReducer } from "./goodsListSlice";

export const getGoodDetailsReducer = createAsyncThunk(
  "goodDetails/get",
  async (goodId: string, { rejectWithValue }) => {
    const goodDetails: IGood | null = await getGoodDetails(goodId);
    if (goodDetails) return goodDetails;
    else return rejectWithValue("GoodDetails request error");
  }
);

const goodDetailsSlice = createSlice({
  name: "goodDetails",
  initialState: {
    status: "",
    goodDetails: {} as IGood,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGoodDetailsReducer.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    });
    builder.addCase(getGoodDetailsReducer.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.succes;
      state.goodDetails = action.payload;
    });
    builder.addCase(getGoodDetailsReducer.rejected, (state) => {
      state.status = REQUEST_STATUS.error;
    });
  },
});

export default goodDetailsSlice.reducer;
