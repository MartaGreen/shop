import React from "react";
import { Link } from "react-router-dom";
import { IGood } from "../../interfaces-types/goods.interface";
import styles from "./good.styles";
import {
  RATING_ICON_HTML,
  SALES_ICON_HTML,
} from "../../constants/icon.constants";

function Good({ data }: { data: IGood }) {
  const classes = styles();

  const availabilityColor: string = defineAvailibilityColor(
    data.availableAmount
  );
  const ratingHTML = generateRating(data.rating);
  const price: string = `₽${parseFloat(data.price.toString()).toFixed(2)}`;
  const salesIcon = data.isInSale ? (
    <div className={classes.good__sales}>{SALES_ICON_HTML}</div>
  ) : (
    ""
  );

  return (
    <Link to={`/goods/item/${data.id}`} className={classes.good}>
      {salesIcon}
      <div className={classes.good__imgContainer}>
        <img
          src={data.imageUrls[0]}
          className={classes.good__img}
          alt="good's picture"
        />
      </div>
      <span style={{ textAlign: "center" }}>{data.name}</span>
      <span style={{ color: availabilityColor }}>
        {data.availableAmount
          ? `В наличии ${data.availableAmount}`
          : "Нет в наличии"}
      </span>
      <div className={classes.good_rating}>{ratingHTML}</div>
      <span>{price}</span>
      <div></div>
    </Link>
  );
}

function defineAvailibilityColor(availableAmount: number) {
  if (availableAmount >= 20) return "yellowgreen";
  else if (availableAmount >= 5) return "#f9be55";
  else return "red";
}

function generateRating(rating: number) {
  const ratingItemsCount: number = 5;
  const result = [];
  for (let i: number = 0; i < ratingItemsCount; i++) {
    result.unshift(RATING_ICON_HTML(i, rating));
  }
  return result;
}

export default Good;
