import React from "react";
import { useState } from "react";

import styles from "./dropdown.style";

function Dropdown({ name, content }: { name: string; content: string[] }) {
  const [isOpened, setIsOpened] = useState(false);
  const classes = styles();
  const contentList = content.map((item, index) => (
    <li className={classes.content__item} key={index}>
      {item}
    </li>
  ));

  return (
    <div
      className={classes.dropdownContainer}
      onClick={() => {
        setIsOpened((state) => !state);
      }}
    >
      <div className={classes.dropdown__name}>
        <span>{name}</span>
        <div className={classes.dropdown__icon}></div>{" "}
      </div>
      <div
        className={classes.dropdown__content}
        style={{ display: `${isOpened ? "block" : "none"}` }}
      >
        <ul style={{ padding: "0 15px" }}>{contentList}</ul>
      </div>
    </div>
  );
}

export default Dropdown;