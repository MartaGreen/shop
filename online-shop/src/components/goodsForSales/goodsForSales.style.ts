import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  carouselContainer: {
    position: "relative",
    width: 300,
    height: 300,

    display: "flex",
    flexDirection: "column",
    marginLeft: "2%",
  },
  carousel__content: {
    boxShadow: "0 0 5px #d3d1d1",
    width: "96%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "2%",
  },
  carousel__title: {
    width: "100%",
    textAlign: "center",
    background: "#f89e2e",
    color: "#fff",
    fontSize: 45,
    margin: "0 0 10px 0",
    borderRadius: "7px 0",
  },
  carousel: {
    position: "relative",
    width: "80%",
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

  "@media (max-width: 425px)": {
    carouselContainer: {
      margin: "30px auto",
    },
  },
  "@media (min-width: 768px)": {
    carouselContainer: {
      width: 500,
      height: 500,

      marginLeft: "2%",
    },
    carouselItem: {
      height: 400,
    },
  },
  "@media (min-width: 1200px)": {
    carouselContainer: {
      marginLeft: 0,
    },
  },
});

export default styles;
