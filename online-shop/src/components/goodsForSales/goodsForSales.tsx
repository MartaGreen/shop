import React, { useEffect, useState } from "react";
import { IGood } from "../../interfaces-types/goods.interface";

import { REQUEST_STATUS } from "../../constants/request.constants";
import { getGoodsForSales } from "../../requests/goods.requests";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./goodsForSales.style";

import imgNotFound_src from "../../assets/img_not_found.png";

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

  const goodsList = goodsForSales.map((good) => (
    <div className={classes.carouselItem} key={good.id}>
      <img
        className={classes.carouselItem__img}
        src={good.imageUrls[0] ? good.imageUrls[0] : imgNotFound_src}
        alt={good.name}
      />
      <p className="legend">{good.name}</p>
    </div>
  ));

  return (
    <div className={classes.carouselContainer}>
      <h1 className={classes.carousel__title}>Sales</h1>

      <div className={classes.carousel__content}>
        <div className={classes.salesIcon}>
          <svg
            id="Layer_1"
            width="50px"
            height="50px"
            version="1.1"
            viewBox="0 0 100 100"
            enableBackground={"new 0 0 100 100"}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n" }} />
            <g>
              <g id="fill">
                <path
                  className="st0"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#fdb913"
                  d="M93.7,50.6l-4-5.5c5.1-9.7,8.5-23.7-7.5-22.2c-0.6-5.1-4.6-14.4-9.6-16.6C66.6,3.7,61.1,8.5,56.8,12    c-2-2.4-6.3-7.1-9.7-7.4c-7-6.4-13.8,3.5-16.5,9.1C15,10,7.9,19.4,14,34.1c-4.6,1.7-13.4,5.7-11,12c0.2,1,0.5,2,1,2.9    c1.1,2.4,2.9,4.4,5.2,5.8c1.7,1.7,3.6,3.4,5.3,4.8c-0.4,1.5-1.4,3.2-1.5,4.9c-1.3,3.5-2.5,7-3.8,10.5l15.9,0.9    c0.5,0.5,0.9,1,1.5,1.5c-0.4,5-5.4,15.9,2.9,17.1c2.5,0.4,3.7-0.9,5.5-2.3c1.6-1.3,3.3-2.5,5.1-3.5c1.7-1,3.5-1.7,5.3-2.2    l12.3,9.7c1.5-1.8,3-3.5,4.5-5.3c2.1-1.6,3.5-3.9,4-6.5c0,0,0.1,0,0.1-0.1c4.3,0.3,9.3,4.2,13.4,2.8c1-0.3,1.8-0.9,2.5-1.6    c3.4-3.3,3.5-9.9,0.8-16.7c4.4-1,8.4-3,11.8-5.9c1.8-1.6,2.3-2.5,2.5-3.5C97.5,58.7,98.1,56.6,93.7,50.6z"
                />
              </g>
              <g id="line_copy">
                <path
                  className="st1"
                  fill="#fdb913"
                  d="M88.5,52.3c-1.5-2-2.9-4.1-4.2-6c-0.3-0.5-0.3-1.2,0.1-1.7c3.3-4.1,5.6-8.8,6.8-13.9    c-2.6-0.6-5.2-1.2-7.9-1.7c-2.8-0.6-5.6-1.1-8.3-1.6c-0.7-0.1-1.2-0.8-1.2-1.6c0.2-1.7,0.3-3.3,0.3-5c0-1.3-0.1-2.6-0.2-4.1    c-0.2-2.6-0.7-5.2-1.4-7.8c-5.5,2.2-10.6,5.3-15.2,9.1c-0.6,0.5-1.4,0.4-1.9-0.1c-1.8-1.8-3.8-3.6-6-5.5c-2.2-1.9-4.4-3.6-6.5-5.2    c-1.5,2.3-2.9,4.7-4.4,7.1c-1.3,2.1-2.5,4.3-3.7,6.4c-0.3,0.5-0.9,0.8-1.5,0.7c-2.6-0.4-5.4-0.7-8.4-0.9c-2.6-0.2-5-0.3-7.4-0.3    c0.4,2.5,0.8,5.2,1.5,8.1c0.6,2.9,1.4,5.5,2.1,8c0.2,0.6-0.1,1.3-0.6,1.6c-2.3,1.4-4.5,2.8-6.9,4.2c-2.3,1.4-4.5,2.9-6.7,4.3    C8.4,48.1,10,50,11.9,52c2,2,4,4,6.2,5.8c0.5,0.4,0.6,1,0.4,1.6c-1,2.5-2,5.2-3.3,7.9c-1.1,2.3-2.1,4.5-3.2,6.5c0.3,0,0.5,0,0.8,0    c1.9,0,3.9,0.1,6,0.2c2.7,0.2,5.3,0.6,7.9,1c0.6,0.1,1.1,0.6,1.2,1.2c0.5,2.7,0.9,5.6,1.2,8.6c0.3,2.6,0.5,5.1,0.7,7.6    c2.2-1.2,4.4-2.4,6.7-3.8c2.8-1.7,5.6-3.3,8.2-5c0.5-0.3,1.1-0.3,1.6,0.1c1.7,1.3,3.5,2.7,5.3,4.2c2.4,2,4.6,4,6.6,6    c3.1-3.6,6.2-7.3,9.4-10.9c0.3-0.4,0.8-0.6,1.3-0.5L83,85c-0.5-2.7-0.9-5.5-1.1-8.3c-0.2-2-0.2-3.8-0.2-5.6c0-0.6,0-1.3,0-1.9    c0-0.5,0.2-0.9,0.6-1.1c2-1.4,4-2.8,6.1-4.5c2-1.6,3.8-3.1,5.5-4.7C92.2,57,90.3,54.8,88.5,52.3z M41.7,70.8    c-2.1,2.1-5.2,2.5-8.1,2.3c-2.2-0.1-2.2-3.6,0-3.4c1.9,0.1,5,0.2,6.1-1.9c1.2-2.3-1.8-2.7-3.2-2.3c-0.9,0.2-1.7,0.7-2.6,0.9    c-2.4,0.7-5,0.4-6.5-1.7c-1.4-2.1-1.3-4.8,0.2-6.7c1.7-2.3,4.6-3.1,7.3-3c2.2,0.1,2.2,3.5,0,3.4c-1.8-0.1-6,0.7-5,3.6    c0.9,2.8,5,0.3,6.6-0.1c2.4-0.6,5.1-0.1,6.4,2.2C44,66.3,43.5,69,41.7,70.8z M54,59.3c-1-0.9-2-1.8-3-2.6c-1.3,1-2.6,2.1-3.8,3.2    c0.6,1.1,1.1,2.1,1.7,3.2c1.1,1.9-1.9,3.7-3,1.7c-2-3.3-3.7-6.8-5.2-10.4c-0.7-1.7-1.7-5,0.4-6.3c2.2-1.3,5.6,1.4,7.3,2.5    c2.9,1.8,5.6,3.9,8,6.2C58.1,58.4,55.6,60.8,54,59.3z M66.6,52.9c-1.7,1-3.3,2.1-4.9,3.3c-0.7,0.6-1.8,0.6-2.4,0    c-3.5-3.8-6.7-7.9-9.5-12.2c-1.2-1.9,1.8-3.6,3-1.7c2.4,3.7,5.1,7.2,8,10.5c1.3-1,2.7-1.9,4.1-2.8C66.8,48.7,68.5,51.7,66.6,52.9    L66.6,52.9z M75.8,45c-2,1.4-5.9,6-8.5,3.8c-1.6-1.4-2.7-3.6-4.1-5.3c-1.6-1.9-3.4-3.8-5.2-5.5c-0.5-0.4-0.6-1.1-0.4-1.7    c0.1-0.3,0.2-0.7,0.5-0.9c1.8-1.9,3.9-3.7,6.2-5.1c1.9-1.2,3.6,1.8,1.7,3c-1.6,1-3.1,2.1-4.4,3.4c0.9,0.9,1.8,1.9,2.7,2.8l4.1-3.5    c1.7-1.4,4.1,1,2.4,2.4l-4.3,3.7c0.4,0.5,0.8,1,1.2,1.4c0.3,0.4,1.2,1.2,1.3,1.6c0.1,0.1,0.2,0.2,0.3,0.3l0.2-0.1    c1.5-1.2,3.1-2.3,4.7-3.4C75.8,40.7,77.5,43.7,75.8,45L75.8,45z"
                />
                <path
                  className="st1"
                  fill="#fdb913"
                  d="M45.6,56.7c0.9-0.7,1.7-1.5,2.6-2.2c-1.3-0.9-3.2-2.5-4.5-2.7c-0.5-0.4-0.6-0.3-0.2,0.2    c0.3,0.8,0.6,1.7,1,2.5C44.9,55.3,45.3,56,45.6,56.7z"
                />
                <path d="M90.8,50.6c-1.3-1.7-2.4-3.4-3.5-5c3.5-4.6,5.9-10,7-15.7c0.1-0.8-0.3-1.5-1.1-1.7c-3.1-0.7-6.2-1.4-9.4-2    c-2.4-0.5-4.7-1-7-1.4c0.1-1.2,0.2-2.6,0.2-4c0-1.4-0.1-2.8-0.2-4.3c-0.3-3.3-1-6.6-2-9.9c-0.2-0.8-1-1.2-1.8-0.9c0,0,0,0-0.1,0    c-3.3,1.2-6.6,2.8-9.6,4.6c-2.4,1.4-4.7,3-6.8,4.7c-1.6-1.6-3.3-3.1-5.2-4.8c-2.7-2.3-5.4-4.4-7.9-6.3c-0.6-0.5-1.5-0.3-2,0.3    c0,0,0,0,0,0.1C39.5,7,37.8,9.9,36,12.8c-1.1,1.9-2.2,3.7-3.3,5.6c-2.4-0.3-4.9-0.6-7.6-0.8c-3.2-0.2-6.1-0.3-8.9-0.3h-0.3    c-0.8,0-1.4,0.6-1.4,1.4c0,0.1,0,0.1,0,0.2c0.4,3.1,1,6.4,1.8,10c0.6,2.5,1.2,4.9,1.9,7.2c-2,1.2-3.9,2.4-5.9,3.7    c-2.8,1.7-5.4,3.5-8.1,5.2c-0.7,0.4-0.8,1.3-0.4,2c0,0,0,0.1,0.1,0.1c1.9,2.5,3.9,4.9,6.1,7.1c1.9,2,3.8,3.8,5.6,5.4    c-0.8,2.2-1.8,4.5-2.9,6.8c-1.4,3.1-2.9,5.9-4.3,8.5c-0.4,0.7-0.1,1.6,0.5,2c0.2,0.1,0.5,0.2,0.8,0.2c1,0,2.1-0.1,3.2-0.1    c1.8,0,3.7,0.1,5.7,0.2c2.4,0.2,4.6,0.5,6.6,0.8c0.4,2.4,0.8,4.9,1.1,7.5c0.4,3.4,0.7,6.6,0.8,9.6c0,0.8,0.7,1.4,1.5,1.3    c0.2,0,0.4-0.1,0.6-0.2c2.8-1.5,5.7-3.1,8.7-4.9c2.6-1.5,5-3,7.4-4.5c1.4,1.1,2.9,2.2,4.4,3.5c2.8,2.3,5.3,4.7,7.6,6.9    c0.6,0.6,1.5,0.6,2,0c0,0,0.1-0.1,0.1-0.1c3.3-3.8,6.5-7.7,9.8-11.5l15.4,2.7c0.8,0.1,1.5-0.4,1.7-1.2c0-0.2,0-0.4,0-0.6    c-0.7-3.3-1.2-6.6-1.5-9.9c-0.1-1.9-0.2-3.7-0.2-5.4c0-0.4,0-0.7,0-1.1c1.8-1.3,3.7-2.6,5.6-4.2c2.5-1.9,4.7-3.9,6.7-5.7    c0.6-0.5,0.6-1.4,0.1-2C95,55.9,92.9,53.4,90.8,50.6z M88.4,63.7c-2.1,1.6-4.1,3.1-6.1,4.5c-0.4,0.3-0.6,0.7-0.6,1.1    c0,0.6,0,1.2,0,1.9c0,1.8,0.1,3.6,0.2,5.6c0.2,2.8,0.6,5.5,1.1,8.3l-14.2-2.5c-0.5-0.1-1,0.1-1.3,0.5c-3.1,3.6-6.2,7.3-9.4,10.9    c-2-2-4.2-4-6.6-6c-1.8-1.5-3.6-2.9-5.3-4.2c-0.5-0.4-1.1-0.4-1.6-0.1c-2.6,1.7-5.3,3.3-8.2,5c-2.3,1.3-4.5,2.6-6.7,3.8    c-0.2-2.4-0.4-4.9-0.7-7.6c-0.4-3-0.8-5.9-1.2-8.6c-0.1-0.6-0.6-1.1-1.2-1.2c-2.6-0.5-5.3-0.8-7.9-1c-2.1-0.2-4.1-0.2-6-0.2    c-0.3,0-0.5,0-0.8,0c1.1-2,2.2-4.2,3.2-6.5c1.3-2.7,2.4-5.4,3.3-7.9c0.2-0.6,0-1.2-0.4-1.6C15.9,56,13.8,54,11.9,52    C10,50,8.4,48.1,6.9,46.3c2.2-1.4,4.4-2.9,6.7-4.3c2.3-1.4,4.6-2.8,6.9-4.2c0.6-0.3,0.8-1,0.6-1.6c-0.8-2.5-1.5-5.2-2.1-8    c-0.6-2.8-1.1-5.5-1.5-8.1c2.3,0,4.8,0.1,7.4,0.3c3,0.2,5.8,0.6,8.4,0.9c0.6,0.1,1.2-0.2,1.5-0.7c1.2-2.1,2.4-4.2,3.7-6.4    c1.5-2.4,2.9-4.8,4.4-7.1c2.1,1.6,4.3,3.3,6.5,5.2c2.2,1.9,4.2,3.7,6,5.5c0.5,0.5,1.4,0.6,1.9,0.1c4.5-3.8,9.7-6.9,15.2-9.1    c0.7,2.6,1.2,5.2,1.4,7.8c0.1,1.4,0.2,2.8,0.2,4.1c0,1.7-0.1,3.4-0.3,5c-0.1,0.7,0.4,1.4,1.2,1.6c2.7,0.5,5.5,1.1,8.3,1.6    c2.7,0.6,5.3,1.1,7.9,1.7c-1.2,5.1-3.5,9.8-6.8,13.9c-0.4,0.5-0.4,1.2-0.1,1.7c1.3,1.9,2.7,3.9,4.2,6c1.8,2.4,3.7,4.7,5.5,6.7    C92.2,60.6,90.4,62.1,88.4,63.7z" />
                <path d="M36.5,61.9c-1.6,0.4-5.7,2.9-6.6,0.1c-1-2.9,3.2-3.7,5-3.6c2.2,0.1,2.2-3.4,0-3.4c-2.8-0.1-5.6,0.6-7.3,3    c-1.5,2-1.6,4.7-0.2,6.7c1.5,2.2,4.2,2.4,6.5,1.7c0.9-0.2,1.7-0.7,2.6-0.9c1.5-0.3,4.4,0,3.2,2.3c-1.1,2.1-4.1,2-6.1,1.9    c-2.2-0.1-2.2,3.3,0,3.4c2.9,0.2,5.9-0.2,8.1-2.3c1.8-1.7,2.3-4.4,1.1-6.7C41.5,61.8,38.9,61.3,36.5,61.9z" />
                <path d="M48.4,50.6c-1.7-1.1-5.1-3.8-7.3-2.5c-2.1,1.3-1.1,4.5-0.4,6.3c1.5,3.6,3.3,7,5.2,10.4c1.1,1.9,4.1,0.2,3-1.7    c-0.6-1-1.2-2.1-1.7-3.2c1.2-1.1,2.5-2.2,3.8-3.2c1,0.8,2,1.7,3,2.6c1.6,1.5,4-0.9,2.4-2.4C54,54.5,51.3,52.4,48.4,50.6z     M43.7,51.9c1.3,0.2,3.2,1.7,4.5,2.7c-0.9,0.7-1.7,1.4-2.6,2.2c-0.4-0.7-0.7-1.4-1-2.2c-0.4-0.8-0.7-1.6-1-2.5    C43.1,51.6,43.2,51.5,43.7,51.9z" />
                <path d="M64.9,49.9c-1.4,0.9-2.8,1.8-4.1,2.8c-2.9-3.3-5.6-6.8-8-10.5c-1.2-1.9-4.2-0.1-3,1.7c2.8,4.3,6,8.4,9.5,12.2    c0.7,0.6,1.8,0.6,2.4,0c1.6-1.2,3.2-2.3,4.9-3.3C68.5,51.7,66.8,48.7,64.9,49.9z" />
                <path d="M74,42c-1.6,1.1-3.2,2.2-4.7,3.4l-0.2,0.1c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.5-1-1.3-1.3-1.6c-0.4-0.5-0.8-1-1.2-1.4    l4.3-3.7c1.7-1.4-0.8-3.9-2.4-2.4l-4.1,3.5c-0.9-1-1.8-1.9-2.7-2.8c1.3-1.3,2.8-2.4,4.4-3.4c1.9-1.2,0.2-4.1-1.7-3    c-2.3,1.4-4.4,3.1-6.2,5.1c-0.2,0.2-0.4,0.6-0.5,0.9c-0.2,0.6-0.1,1.3,0.4,1.7c1.8,1.8,3.6,3.6,5.2,5.5c1.4,1.6,2.5,3.9,4.1,5.3    c2.6,2.2,6.5-2.3,8.5-3.8C77.5,43.7,75.8,40.7,74,42z" />
              </g>
            </g>
          </svg>
        </div>
        <Slider className={classes.carousel} {...settings}>
          {goodsList}
        </Slider>
      </div>
    </div>
  );
}

export default GoodForSales;
