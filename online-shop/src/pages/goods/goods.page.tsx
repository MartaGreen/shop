import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Good from "../../components/good/good";
import { IGood } from "../../interfaces-types/goods.interface";
import IStoreState from "../../interfaces-types/store.interface";
import { AppDispatch } from "../../redux";
import { getGoodsReducer } from "../../redux/slices/goodsListSlice";
import styles from "./goods.style";

function Goods() {
  const classes = styles();
  const params = useParams();

  const dispatch: AppDispatch = useDispatch();
  const storeData = useSelector((state: IStoreState) => state.goods);
  const goods: IGood[] = storeData.goods;

  useEffect(() => {
    if (params.categoryId && params.subCategoryId) {
      dispatch(
        getGoodsReducer({
          categoryId: params.categoryId,
          subCategoryId: params.subCategoryId,
        })
      );
    }
  }, []);

  const goodsHTML = goods.map((good) => <Good data={good} key={good.id} />);

  return (
    <main className="main">
      <div className={classes.goods}>{goodsHTML}</div>
    </main>
  );
}

export default Goods;
