import { SHOP_REQUEST_URL } from "../constants/request.constants";
import { IGood } from "../interfaces-types/goods.interface";

const GOODS_REQUEST_URL = `${SHOP_REQUEST_URL}goods/`;

export async function getGoodsForSales() {
  const response: Response = await fetch(`${GOODS_REQUEST_URL}isInSale`);

  try {
    if (response.ok) {
      const goodsForSales: IGood[] = await response.json();
      return goodsForSales;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log("GoodsForSales request error. Status:", err);
    return null;
  }
}
