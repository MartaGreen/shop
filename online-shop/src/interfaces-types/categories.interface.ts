export interface ICategoriesSliceInitState {
  dtatus: string;
  categories: ICategory[];
  chosenCategory: ICategory;
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
