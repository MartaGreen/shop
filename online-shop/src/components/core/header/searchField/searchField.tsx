import React from "react";
import styles from "./searchField.style";

function SearchField() {
  const classes = styles();

  return (
    <input type="text" placeholder="Search ..." className={classes.input} />
  );
}

export default SearchField;
