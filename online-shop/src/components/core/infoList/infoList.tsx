import React from "react";
import styles from "./infoList.style";

import Dropdown from "../../../shared/dropdown/dropdown";

function InfoList({
  name,
  content,
}: {
  name: string;
  content: string[] | JSX.Element;
}) {
  const classes = styles();

  const contentList = Array.isArray(content)
    ? content.map((item, index) => (
        <li className={classes.list__item} key={index}>
          {item}
        </li>
      ))
    : content;

  return (
    <Dropdown name={name}>
      <ul style={{ padding: "0 15px" }}>{contentList}</ul>
    </Dropdown>
  );
}

export default InfoList;
