import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  goodDetails__title: {
    textAlign: "center",
    fontSize: 35,
  },

  goodContent__wrapper: {
    display: "flex",
    alignItems: "flex-start",
    gridGap: 20,
  },

  goodContent__goodInfo: {
    width: "40%",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    padding: 10,
  },

  "@media (max-width: 550px)": {
    goodContent__wrapper: {
      flexDirection: "column",
    },
    goodContent__goodInfo: {
      width: "94%",
    },
    goodDetails__title: {
      fontSize: 25,
    },
  },
});

export default styles;
