import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  header: {
    position: "relative",

    minHeight: 100,
    background: "linear-gradient(180deg,#f7a428,#fbfd6c)",

    padding: "4% 2%",
  },
  header__inner: {
    maxWidth: 1200,
    minWidth: 300,
    width: "100%",

    margin: "0 auto",
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
  },

  "@media (max-width: 768px)": {
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

export default styles;
