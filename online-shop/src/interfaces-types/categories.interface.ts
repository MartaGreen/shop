export interface ICategoriesSliceInitState {
  status: string;
  categories: ICategory[];
  chosenCategory: ISubCategory[];
}

export interface ICategory {
  id: string;
  name: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  id: string;
  name: string;
}
