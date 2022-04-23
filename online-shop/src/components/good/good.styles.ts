import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  good: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    minHeight: 300,

    textDecoration: "none",
    color: "black",
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
