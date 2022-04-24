import React from "react";

import imgNotFound_src from "../../assets/img_not_found.png";
import { SALES_ICON_HTML } from "../../constants/icon.constants";
import { REQUEST_STATUS } from "../../constants/request.constants";
import Slider from "react-slick";

import styles from "./goodsCarousel.style";
import "./goodCarousel.css";

function GoodsCarousel({
  slides,
  settings,
  status,
  isInSale,
  title,
}: {
  slides: { id: string; name: string | null; imgUrl: string }[];
  settings: {};
  status: string;
  isInSale: boolean;
  title: string | null;
}) {
  const classes = styles();
  const loadingIcon = "Loading ...";

  const goodsList = slides.map((slide) => (
    <div
      className={classes.carouselItem}
      key={slide.id}
      title={`${slide.name ? slide.name : ""}`}
    >
      <img
        className={classes.carouselItem__img}
        src={slide.imgUrl ? slide.imgUrl : imgNotFound_src}
        alt={slide.name ? slide.name : "pic"}
        onError={(e) =>
          (e.target as HTMLImageElement).setAttribute("src", imgNotFound_src)
        }
      />
      {/* <p
        className="legend"
        style={{ display: `${slide.name ? "inline" : "none"}` }}
      >
        {slide.name}
      </p> */}
    </div>
  ));
  const carousel = (
    <div className={classes.carousel__content}>
      {isInSale ? (
        <div className={classes.salesIcon}>{SALES_ICON_HTML}</div>
      ) : (
        <div />
      )}
      <Slider className={classes.carousel} {...settings}>
        {goodsList}
      </Slider>
    </div>
  );

  return (
    <div className={classes.carouselContainer}>
      <h1 className={classes.carousel__title}>{title}</h1>
      {status === REQUEST_STATUS.pending ? (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {loadingIcon}
        </div>
      ) : status === REQUEST_STATUS.error ? (
        <div style={{ textAlign: "center" }}>
          Cannot connect to server. Try later!
        </div>
      ) : (
        carousel
      )}
    </div>
  );
}

export default GoodsCarousel;
