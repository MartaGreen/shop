import React, { useEffect, useState } from "react";
import { IGood } from "../../interfaces-types/goods.interface";

import { REQUEST_STATUS } from "../../constants/request.constants";
import { getGoodsForSales } from "../../requests/goods.requests";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./goodsForSales.style";

import imgNotFound_src from "../../assets/img_not_found.png";
import { SALES_ICON_HTML } from "../../constants/icon.constants";

function GoodForSales() {
  const [goodsForSales, setGoodsForSales] = useState([] as IGood[]);
  const [status, setStatus] = useState("");

  const classes = styles();

  useEffect(() => {
    setStatus(REQUEST_STATUS.pending);

    getGoodsForSales().then((goods: IGood[] | null) => {
      if (goods) {
        setGoodsForSales(goods);
        setStatus(REQUEST_STATUS.succes);
      } else {
        setStatus(REQUEST_STATUS.error);
      }
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplaySpeed: 3000,
    autoplay: true,
  };

  const loadingIcon = "Loading ...";

  const goodsList = goodsForSales.map((good) => (
    <div className={classes.carouselItem} key={good.id}>
      <img
        className={classes.carouselItem__img}
        src={good.imageUrls[0] ? good.imageUrls[0] : imgNotFound_src}
        alt={good.name}
        onError={(e) =>
          (e.target as HTMLImageElement).setAttribute("src", imgNotFound_src)
        }
      />
      <p className="legend">{good.name}</p>
    </div>
  ));
  const carousel = (
    <div className={classes.carousel__content}>
      <div className={classes.salesIcon}>{SALES_ICON_HTML}</div>
      <Slider className={classes.carousel} {...settings}>
        {goodsList}
      </Slider>
    </div>
  );

  return (
    <div className={classes.carouselContainer}>
      <h1 className={classes.carousel__title}>Sales</h1>

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

export default GoodForSales;
