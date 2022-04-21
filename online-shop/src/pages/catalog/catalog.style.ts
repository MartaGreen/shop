import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  catalog: {
    display: "flex",
    justifyContent: "space-around",

    width: "94%",
    minWidth: 300,
    maxWidth: 1200,

    margin: "0 auto",
    padding: "30px 2%",
  },

  catalog__categories: {
    minWidth: 140,
    width: "40%",
    maxWidth: 230,

    borderRight: "1px solid #b3b1b1",
    marginRight: 10,
  },
  categories__item: {
    padding: "10px 0",

    "&:hover": {
      borderRight: "5px solid #ff7700",
      cursor: "default",
    },
  },

  catalog__subCategories: {
    width: "60%",

    display: "flex",
    justifyContent: "center",
  },
  subCategories__item: {
    padding: "10px 0",

    "&:hover": {
      borderBottom: "3px solid #ff7700",
      cursor: "pointer",
    },
  },

  catalog__ul: {
    listStyle: "none",
    padding: 0,
  },
});

export default styles;
