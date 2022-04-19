import React, { useEffect, useState } from "react";
import { IGood } from "../../interfaces-types/goods.interface";

import { REQUEST_STATUS } from "../../constants/request.constants";
import { getGoodsForSales } from "../../requests/goods.requests";
import Good from "../good/good";

function GoodForSales() {
  const [goodsForSales, setGoodsForSales] = useState([] as IGood[]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(REQUEST_STATUS.pending);

    getGoodsForSales().then((goods: IGood[] | null) => {
      if (goods) {
        setGoodsForSales(goods);
        setStatus(REQUEST_STATUS.succes);
      } else {
        setStatus(REQUEST_STATUS.error);
      }
    });
  });

  const goodsList = goodsForSales.map((good) => (
    <Good data={good} key={good.id} />
  ));

  return <ul>{goodsList}</ul>;
}

export default GoodForSales;
