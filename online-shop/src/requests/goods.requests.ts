import { SHOP_REQUEST_URL } from "../constants/request.constants";
import { IGood } from "../interfaces-types/goods.interface";

const GOODS_REQUEST_URL = `${SHOP_REQUEST_URL}goods/`;

export async function getGoods(categoryId: string, subCategoryId: string) {
  try {
    const CATEGORY_GOODS_REQUEST_URL: string = `${GOODS_REQUEST_URL}category/${categoryId}/${subCategoryId}`;
    const response: Response = await fetch(CATEGORY_GOODS_REQUEST_URL);

    if (response.ok) {
      const goods: IGood[] = await response.json();
      return goods;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log("Goods request error:", err);
    return null;
  }
}

export async function getGoodsForSales() {
  try {
    const response: Response = await fetch(`${GOODS_REQUEST_URL}isInSale`);
    if (response.ok) {
      const goodsForSales: IGood[] = await response.json();
      return goodsForSales;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log("GoodsForSales request error:", err);
    return null;
  }
}

export async function getGoodDetails(goodId: string) {
  try {
    const GOOD_DETAILS_REQUEST_URL: string = `${GOODS_REQUEST_URL}item/${goodId}`;
    const response: Response = await fetch(GOOD_DETAILS_REQUEST_URL);

    if (response.ok) {
      const goodDetails: IGood = await response.json();
      return goodDetails;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log("GoodDetails request error", err);
    return null;
  }
}
