import { createUseStyles } from "react-jss";

const style = createUseStyles({
  dropdownContainer: {
    position: "relative",

    color: "rgb(71, 70, 70)",
    fontSize: 14,

    "&:hover": {
      cursor: "pointer",
    },
  },
  dropdown__name: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    "& :hover": {
      color: "red",

      dropdown__icon: {
        borderLeft: "2px solid red",
        borderBottom: "2px solid red",
      },
    },
  },
  dropdown__icon: {
    width: 5,
    height: 5,

    borderLeft: "2px solid gray",
    borderBottom: "2px solid gray",
    transform: "rotate(-45deg)",
    marginLeft: 5,
  },

  dropdown__content: {
    position: "absolute",
    top: 20,
    right: 0,

    minWidth: 200,

    background: "white",
    zIndex: 2000,

    backgroundClip: "padding-box",
    border: "1px solid rgba(0,0,0,.15)",
    borderRadius: "0.25rem",
  },
  content__item: {
    listStyle: "none",
    margin: "5px 0",

    "&:hover": {
      background: "#eaecef",
    },
  },
});

export default style;
