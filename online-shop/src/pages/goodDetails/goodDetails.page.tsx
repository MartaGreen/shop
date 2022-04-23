import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GoodsCarousel from "../../components/goodsCarousel/goodsCarousel";
import IStoreState from "../../interfaces-types/store.interface";
import { AppDispatch } from "../../redux";
import { getGoodDetailsReducer } from "../../redux/slices/goodDetailsSlice";

function GoodDetails() {
  const params = useParams();
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplaySpeed: 5000,
    autoplay: true,
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
        <GoodsCarousel
          slides={slides}
          settings={settings}
          status={status}
          isInSale={goodData.isInSale}
          title={null}
        />
      </div>
    );
  else return <div></div>;
}

export default GoodDetails;
