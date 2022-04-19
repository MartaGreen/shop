import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  carouselContainer: {
    position: "relative",
    width: 300,
    height: 300,

    border: "1px solid gray",
    margin: 10,
    borderRadius: 7,

    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  carousel__title: {
    width: "100%",
    textAlign: "center",
    background: "orange",
    color: "#fff",
    fontSize: 45,
    margin: "0 0 10px 0",
    borderRadius: "7px",
  },
  carousel: {
    position: "relative",

    width: "80%",
    height: 200,
  },
  carouselItem: {
    height: 200,
  },

  carouselItem__img: {
    maxHeight: "80%",
    maxWidth: "100%",
    width: "auto",
    display: "block",
    margin: "auto",
  },

  salesIcon: {
    position: "absolute",
    top: 70,
    right: 25,

    zIndex: 1000,
  },
});

export default styles;
