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
          <div className={classes.header__loaction}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              width="24px"
              height="24px"
              enableBackground={"new 0 0 24 24"}
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n        .st0 {\n          fill: none;\n        }\n      ",
                }}
              />
              <path
                d="M12,2C8.1,2,5,5.1,5,9c0,6,7,13,7,13s7-7.1,7-13C19,5.1,15.9,2,12,2z M12,11.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5
s2.5,1.1,2.5,2.5S13.4,11.5,12,11.5z"
              />
              <rect className="st0" width={24} height={24} />
            </svg>

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
        <div></div>
      </div>
    </header>
  );
}

export default Header;
