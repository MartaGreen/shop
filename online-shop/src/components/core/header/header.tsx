import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import getUserLocation from "../../../requests/userLocation.request";
import styles from "./header.style";

import Dropdown from "../../../shared/dropdown/dropdown";
import { paymentDropdown, contactDropdown } from "./headerData";

function Header() {
  const [city, setCity] = useState("");
  useEffect(() => {
    getUserLocation().then((city: string) => setCity(city));
  }, []);

  const classes = styles();

  return (
    <header className={classes.header}>
      {/* Header contact information */}
      <div className={classes.header__inner}>
        <div className={classes.header__info}>
          <div>{city}</div>

          <div className={classes.info__item}>
            <div>
              <Dropdown name={"Оплата"} content={paymentDropdown} />
            </div>
            <div>
              <Dropdown name={"Контакты"} content={contactDropdown} />
            </div>
            <div className={classes.info__time}>
              Контакт-центр с 8:00 до 22:00
            </div>
          </div>
        </div>

        {/* Header user's field to intect with shop */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;
