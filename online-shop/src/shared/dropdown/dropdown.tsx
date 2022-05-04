import React from "react";
import { useState } from "react";

import styles from "./dropdown.style";

function Dropdown({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [isOpened, setIsOpened] = useState(false);
  const classes = styles();

  return (
    <div
      className={classes.dropdownContainer}
      onMouseOver={() => setIsOpened(true)}
      onMouseOut={() => setIsOpened(false)}>
      <div className={classes.dropdown__name}>
        <span>{name}</span>
        <div className={classes.dropdown__icon}></div>{" "}
      </div>
      <div
        className={classes.dropdown__content}
        style={{ display: `${isOpened ? "block" : "none"}` }}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
