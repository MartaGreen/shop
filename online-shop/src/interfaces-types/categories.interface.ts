export interface ICategoriesSliceInitState {
  status: string;
  categories: ICategory[];
  chosenCategory: ISubCategory[];
  chosenCategoryId: string;
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
