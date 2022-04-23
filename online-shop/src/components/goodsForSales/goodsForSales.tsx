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
import GoodsCarousel from "../goodsCarousel/goodsCarousel";

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

    autoplaySpeed: 4000,
    autoplay: true,
  };

  const slides: {
    id: string;
    name: string | null;
    imgUrl: string;
  }[] = goodsForSales.map((data) => ({
    id: data.id,
    name: data.name,
    imgUrl: data.imageUrls[0],
  }));

  return (
    <GoodsCarousel
      slides={slides}
      settings={settings}
      status={status}
      isInSale={true}
      title={"Sales"}
    />
  );
}

export default GoodForSales;
