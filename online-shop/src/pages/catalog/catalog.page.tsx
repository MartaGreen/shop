import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import IStoreState from "../../interfaces-types/store.interface";
import {
  getCategoriesReducer,
  updateChosenCategory,
} from "../../redux/slices/categoriesSlice";
import { ICategory } from "../../interfaces-types/categories.interface";
import { Link } from "react-router-dom";

import styles from "./catalog.style";

function Catalog() {
  const classes = styles();

  const dispatch: AppDispatch = useDispatch();
  const storeData = useSelector((state: IStoreState) => state.categories);
  const categories = storeData.categories;
  const chosenCategory = storeData.chosenCategorySubCategories;
  const chosenCategoryId = storeData.chosenCategoryId;

  const categoriesTitle = categories.map((category: ICategory) => (
    <li
      key={category.id}
      className={classes.categories__item}
      onMouseOver={() => dispatch(updateChosenCategory(category.id))}
    >
      {category.name}
    </li>
  ));
  const subCategoriesTitle = chosenCategory.map((subCategory) => (
    <Link
      to={`/goods/${chosenCategoryId}/${subCategory.id}`}
      key={subCategory.id}
      style={{ color: "black", textDecoration: "none" }}
    >
      <li className={classes.subCategories__item}>{subCategory.name}</li>
    </Link>
  ));

  useEffect(() => {
    dispatch(getCategoriesReducer());
  }, []);

  return (
    <div className={classes.catalog}>
      <div className={classes.catalog__categories}>
        <ul className={classes.catalog__ul}>{categoriesTitle}</ul>
      </div>
      <div className={classes.catalog__subCategories}>
        <ul className={classes.catalog__ul}>{subCategoriesTitle}</ul>
      </div>
    </div>
  );
}

export default Catalog;
