import React from "react";
import { useState, useEffect } from "react";
import styles from "./main.style";

import { getGoodsForSales } from "../../requests/goods.requests";
import { IGood } from "../../interfaces-types/goods.interface";
import { REQUEST_STATUS } from "../../constants/request.constants";

import GoodForSales from "../../components/goodsForSales/goodsForSales";

function Main() {
  const classes = styles();
  return (
    <main className={classes.main}>
      <GoodForSales />
    </main>
  );
}

export default Main;
