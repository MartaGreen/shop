import { SHOP_REQUEST_URL } from "../constants/request.constants";
import { ICategory } from "../interfaces-types/categories.interface";

export async function getCategories() {
  try {
    const CATEGORIES_REQUEST_URL = `${SHOP_REQUEST_URL}categories`;
    const response: Response = await fetch(CATEGORIES_REQUEST_URL);

    if (response.ok) {
      const categories: ICategory[] = await response.json();
      return categories;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log("Categories request error:", err);
    return null;
  }
}
