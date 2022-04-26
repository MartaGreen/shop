import React from "react";

import imgNotFound_src from "../../assets/img_not_found.png";
import { SALES_ICON_HTML } from "../../constants/icon.constants";
import { REQUEST_STATUS } from "../../constants/request.constants";
import Slider from "react-slick";

import styles from "./goodsCarousel.style";
import "./goodCarousel.css";
import { useNavigate } from "react-router";
import { IGood } from "../../interfaces-types/goods.interface";

function GoodsCarousel({
  slides,
  settings,
  status,
  isInSale,
  title,
}: {
  slides: {
    id: string;
    name: string | null;
    imgUrl: string;
    goodId?: string;
  }[];
  settings: {};
  status: string;
  isInSale: boolean;
  title: string | null;
}) {
  const classes = styles();
  const loadingIcon = "Loading ...";
  const navigate = useNavigate();

  const carouselSlidesJSX = slides.map((slide) => (
    <div
      className={classes.carouselItem}
      key={slide.id}
      title={`${slide.name ? slide.name : ""}`}
      onClick={() => {
        if (slide.goodId) navigate(`/goods/item/${slide.goodId}`);
      }}
    >
      <img
        className={classes.carouselItem__img}
        src={slide.imgUrl ? slide.imgUrl : imgNotFound_src}
        alt={slide.name ? slide.name : "pic"}
        style={{ cursor: slide.goodId ? "pointer" : "default" }}
        onError={(e) =>
          (e.target as HTMLImageElement).setAttribute("src", imgNotFound_src)
        }
      />
    </div>
  ));

  const carouselJSX = (
    <div className={classes.carousel__content}>
      {isInSale ? (
        <div className={classes.salesIcon}>{SALES_ICON_HTML}</div>
      ) : (
        ""
      )}
      <Slider className={classes.carousel} {...settings}>
        {carouselSlidesJSX}
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
        carouselJSX
      )}
    </div>
  );
}

export default GoodsCarousel;
