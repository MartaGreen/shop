import React from "react";
import { useState, useEffect } from "react";
import styles from "./main.style";

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
