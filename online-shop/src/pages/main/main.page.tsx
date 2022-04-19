import React from "react";
import { useState, useEffect } from "react";

import { getGoodsForSales } from "../../requests/goods.requests";
import { IGood } from "../../interfaces-types/goods.interface";
import { REQUEST_STATUS } from "../../constants/request.constants";

import GoodForSales from "../../components/goodsForSales/goodsForSales";

function Main() {
  return <GoodForSales />;
}

export default Main;
