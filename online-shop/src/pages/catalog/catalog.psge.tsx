import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import IStoreState from "../../interfaces-types/store.interface";
import {
  getCategoriesReducer,
  updateChosenCategory,
} from "../../redux/slices/categoriesSlice";
import { ICategory } from "../../interfaces-types/categories.interface";
import styles from "./catalog.style";

function Catalog() {
  const dispatch: AppDispatch = useDispatch();
  const storeData = useSelector((state: IStoreState) => state.categories);
  const categories = storeData.categories;
  const chosenCategory = storeData.chosenCategory;
  const categoriesTitle = categories.map((category: ICategory) => (
    <li
      key={category.id}
      onMouseOver={() => dispatch(updateChosenCategory(category.name))}
    >
      {category.name}
    </li>
  ));
  const subCategoriesTitle = chosenCategory.map((subCategory) => (
    <li key={subCategory.id}>{subCategory.name}</li>
  ));

  const classes = styles();

  useEffect(() => {
    dispatch(getCategoriesReducer());
  }, []);

  return (
    <div>
      <div>
        <ul>{categoriesTitle}</ul>
      </div>
      <div>
        <ul>{subCategoriesTitle}</ul>
      </div>
    </div>
  );
}

export default Catalog;
