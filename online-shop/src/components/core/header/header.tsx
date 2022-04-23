import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import getUserLocation from "../../../requests/userLocation.request";
import styles, { userInteractionsStyles } from "./header.style";

import Dropdown from "../../../shared/dropdown/dropdown";
import { paymentDropdown, contactDropdown } from "./headerData";

import SearchField from "./searchField/searchField";
import { Link } from "react-router-dom";
import {
  LOCATION_ICON_HTML,
  SHOP_ICON_HTML,
  CATALOG_ICON_HTML,
  USER_ICON_HTML,
  CART_ICON_HTML,
} from "../../../constants/icon.constants";

function Header() {
  const [city, setCity] = useState("");
  useEffect(() => {
    getUserLocation().then((city: string) => setCity(city));
  }, []);

  const classes = styles();
  const userInteractionsClasses = userInteractionsStyles();

  return (
    <header className={classes.header}>
      {/* Header contact information */}
      <div className={classes.header__inner}>
        <div className={classes.header__info}>
          <div className={classes.header__loaction}>
            {LOCATION_ICON_HTML}
            <span>{city}</span>
          </div>

          <div className={classes.info__item}>
            <div>
              <Dropdown name={"Оплата"} content={paymentDropdown} />
            </div>
            <div>
              <Dropdown name={"Контакты"} content={contactDropdown} />
            </div>
            <div className={classes.info__time}>
              Контакт-центр <br /> с 8:00 до 22:00
            </div>
          </div>
        </div>

        <div className={classes.header__dividingLine}></div>

        {/* Header user's field to intect with shop */}
        <div className={userInteractionsClasses.header__userInteractions}>
          {/* icon */}
          <Link
            to="/"
            className={userInteractionsClasses.userInteractions__icon}
          >
            {SHOP_ICON_HTML}
          </Link>

          {/* catalog */}
          <Link
            to="/catalog"
            className={userInteractionsClasses.userInteractions__item}
          >
            {CATALOG_ICON_HTML}
            <span>Каталог</span>
          </Link>

          {/* search field */}
          <div
            className={userInteractionsClasses.userInteractions__searchField}
          >
            <SearchField />
          </div>

          {/* user */}
          <div className={userInteractionsClasses.userInteractions__item}>
            {USER_ICON_HTML}
            <span>Аккаунт</span>
          </div>

          {/* cart */}
          <div className={userInteractionsClasses.userInteractions__item}>
            {CART_ICON_HTML}
            <span>Корзина</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
