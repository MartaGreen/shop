import React, { useEffect, useState } from "react";
import { IGood } from "../../interfaces-types/goods.interface";

import { REQUEST_STATUS } from "../../constants/request.constants";
import { getGoodsForSales } from "../../requests/goods.requests";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GoodsCarousel from "../goodsCarousel/goodsCarousel";
import { Link } from "react-router-dom";

function GoodForSales() {
  const [goodsForSales, setGoodsForSales] = useState([] as IGood[]);
  const [status, setStatus] = useState("");

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
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplaySpeed: 4000,
    autoplay: true,
  };

  const slidesData: {
    id: string;
    name: string | null;
    imgUrl: string;
    goodId: string;
  }[] = goodsForSales.map((data: IGood) => ({
    id: data.id,
    name: data.name,
    imgUrl: data.imageUrls[0],
    goodId: data.id,
  }));

  return (
    <GoodsCarousel
      slides={slidesData}
      settings={settings}
      status={status}
      isInSale={true}
      title={"Sales"}
    />
  );
}

export default GoodForSales;
