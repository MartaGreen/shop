import { ICategoriesSliceInitState } from "./categories.interface";
import { IGoodsInitialState } from "./goods.interface";

export default interface IStoreState {
  categories: ICategoriesSliceInitState;
  goods: IGoodsInitialState;
}
