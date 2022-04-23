import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import IStoreState from "../../interfaces-types/store.interface";
import { AppDispatch } from "../../redux";
import { getGoodDetailsReducer } from "../../redux/slices/goodDetailsSlice";

function GoodDetails() {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const storeData = useSelector((state: IStoreState) => state);
  const goodData = storeData?.goodDetails;

  useEffect(() => {
    if (params.goodId) {
      dispatch(getGoodDetailsReducer(params.goodId));
    }
  }, []);
  return <div>{JSON.stringify(goodData)}</div>;
}

export default GoodDetails;
