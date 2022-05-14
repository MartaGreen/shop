import React, { ReactNode } from "react";
import { useState } from "react";
import { JsxElement } from "typescript";

import styles from "./dropdown.style";

function Dropdown({
  name,
  icon,
  children,
}: {
  name: string | JSX.Element;
  icon?: JSX.Element;
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
        {icon ? icon : ""}
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
