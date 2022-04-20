import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  header: {
    position: "relative",

    minHeight: 100,
    height: "16vh",

    background: "linear-gradient(180deg,#ff9900,#fdd96c)",
    // linear-gradient(180deg,#f7a428,#fbfd6c)
    color: "white",
    fontWeight: "bold",
    fontSize: 18,

    padding: "25px 2%",
  },
  header__inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",

    maxWidth: 1200,
    minWidth: 300,
    width: "100%",
    height: "100%",

    margin: "0 auto",
  },
  header__dividingLine: {
    position: "absolute",
    top: "45%",
    left: 0,
    height: 1,
    width: "100vw",

    background: "white",
  },

  header__loaction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& svg": {
      fill: "white",
    },
  },

  header__info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    minHeight: "30%",
  },
  info__item: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    width: "50%",
  },
  info__time: {
    fontSize: 11,
    fontWeight: "normal",
    color: "black",
  },

  "@media (max-width: 768px)": {
    info__item: {
      width: "60%",
    },
  },
  "@media (max-width: 425px)": {
    info__time: {
      display: "none",
    },
  },
  "@media (min-width: 1024px)": {
    info__item: {
      width: "40%",
    },
  },
});

export const userInteractionsStyles = createUseStyles({
  header__userInteractions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    fontSize: 16,
  },
  userInteractions__item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 30,
    color: "#222121",
    border: "2px solid #cacaca",
    padding: 10,

    "&:hover": {
      cursor: "pointer",
      border: "2px solid #ff5b00",
    },
  },

  userInteractions__catalog: {},

  "@media (min-width: 425px)": {
    userInteractions__catalog: {
      display: "inline",
    },
  },
  "@media (max-width: 600px)": {
    userInteractions__item: {
      width: 25,

      "& span": {
        display: "none",
      },
    },
  },
});

export default styles;
