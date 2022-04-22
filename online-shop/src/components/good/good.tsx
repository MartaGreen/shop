import React from "react";
import { IGood } from "../../interfaces-types/goods.interface";
import styles from "./good.styles";

function Good({ data }: { data: IGood }) {
  const classes = styles();

  const availabilityColor: string = defineAvailibilityColor(
    data.availableAmount
  );
  const ratingHTML = generateRating(data.rating);
  const price: string = `₽${parseFloat(data.price.toString()).toFixed(2)}`;

  return (
    <div className={classes.good}>
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
    </div>
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
  for (let i = 0; i < ratingItemsCount; i++) {
    result.unshift(
      <svg
        width="20px"
        height="19px"
        viewBox="0 0 20 19"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>star</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Icons"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <g id="Two-Tone" transform="translate(-272.000000, -4322.000000)">
            <g id="Toggle" transform="translate(100.000000, 4266.000000)">
              <g
                id="-Two-Tone-/-Toggle-/-star"
                transform="translate(170.000000, 54.000000)"
              >
                <g id="Two-Tone-/-Toggle-/-star">
                  <polygon
                    id="Path"
                    fillRule="nonzero"
                    points="0 0 24 0 24 24 0 24"
                  />
                  <polygon
                    id="🔹-Secondary-Color"
                    fill={i < rating ? "#f9c259" : "gray"}
                    points="12 15.4 8.24 17.67 9.24 13.39 5.92 10.51 10.3 10.13 12 6.1 13.71 10.14 18.09 10.52 14.77 13.4 15.77 17.68"
                  ></polygon>
                  <path
                    d="M22,9.24 L14.81,8.62 L12,2 L9.19,8.63 L2,9.24 L7.46,13.97 L5.82,21 L12,17.27 L18.18,21 L16.55,13.97 L22,9.24 Z M12,15.4 L8.24,17.67 L9.24,13.39 L5.92,10.51 L10.3,10.13 L12,6.1 L13.71,10.14 L18.09,10.52 L14.77,13.4 L15.77,17.68 L12,15.4 Z"
                    id="🔹-Primary-Color"
                    fill={i < rating ? "#f75c06" : "black"}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  return result;
}

export default Good;
