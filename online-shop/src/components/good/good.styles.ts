import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  good: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    height: 350,

    textDecoration: "none",
    color: "black",
    padding: "15px 5px",
    boxShadow: "0 0 5px #d3d1d1",
    transition: ".4s",
    borderRadius: 5,

    "&:hover": {
      boxShadow: "0 0 7px #908e8e",
      transform: "scale(1.05)",
    },
  },

  good__sales: {
    position: "absolute",
    top: 15,
    right: 20,
  },

  good__imgContainer: {
    width: "90%",
    margin: "0 auto",
    height: "50%",
  },
  good__img: {
    display: "block",
    objectFit: "cover",
    height: "100%",
    maxWidth: "90%",
    margin: "0 auto",
  },

  good_rating: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
