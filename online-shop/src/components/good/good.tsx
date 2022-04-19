import React from "react";
import { IGood } from "../../interfaces-types/goods.interface";

function Good({ data }: { data: IGood }) {
  return <div>{JSON.stringify(data)}</div>;
}

export default Good;
