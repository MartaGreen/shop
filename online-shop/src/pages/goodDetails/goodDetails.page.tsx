import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { useParams } from "react-router-dom";

import GoodsCarousel from "../../components/goodsCarousel/goodsCarousel";
import IStoreState from "../../interfaces-types/store.interface";
import { getGoodDetailsReducer } from "../../redux/slices/goodDetailsSlice";
import styles from "./goodDetails.style";

function GoodDetails() {
  const params = useParams();
  const classes = styles();

  const dispatch: AppDispatch = useDispatch();
  const storeData = useSelector((state: IStoreState) => state.goodDetails);
  const goodData = storeData?.goodDetails;
  const status: string = storeData.status;

  useEffect(() => {
    if (params.goodId) {
      dispatch(getGoodDetailsReducer(params.goodId));
    }
  }, []);

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // autoplaySpeed: 5000,
    autoplay: false,
  };

  const slides:
    | {
        id: string;
        name: string | null;
        imgUrl: string;
      }[]
    | null = goodData.imageUrls
    ? goodData.imageUrls.map((img, index) => ({
        id: index.toString(),
        name: null,
        imgUrl: img,
      }))
    : null;

  if (slides)
    return (
      <div>
        <h1 className={classes.goodDetails__title}>{goodData.name}</h1>
        <div className={classes.goodContent__wrapper}>
          <GoodsCarousel
            slides={slides}
            settings={settings}
            status={status}
            isInSale={goodData.isInSale}
            title={null}
          />
          <div className={classes.goodContent__goodInfo}>
            <span
              style={{
                color: "#ff7700",
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 20,
                width: "100%",
                borderBottom: "2px solid #ff7700",
                padding: "5px 0",
              }}
            >
              О товаре:
            </span>
            <span style={{}}>{goodData.description}</span>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

export default GoodDetails;
