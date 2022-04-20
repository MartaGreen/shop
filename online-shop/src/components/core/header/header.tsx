import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import getUserLocation from "../../../requests/userLocation.request";
import styles, { userInteractionsStyles } from "./header.style";

import Dropdown from "../../../shared/dropdown/dropdown";
import { paymentDropdown, contactDropdown } from "./headerData";

import SearchField from "./searchField/searchField";

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
        <div className={userInteractionsClasses.header__userInteractions}>
          {/* catalog */}
          <div className={userInteractionsClasses.userInteractions__item}>
            <svg
              id="Filled"
              height="27px"
              viewBox="0 0 512 512"
              width="27px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m296 472h-272l16-320h240z" fill="#eb423f" />
              <path d="m360 472h-64l-16-320h64z" fill="#d13330" />
              <path
                d="m488 472h-64l-1-12.93v-.01l-15-195.06h64l14.75 191.69v.01z"
                fill="#eba72e"
              />
              <path d="m128 296h-48v-64l24-16 24 16z" fill="#f7b030" />
              <path d="m424 472h-208l16-208h176z" fill="#f7b030" />
              <path d="m479.977 263.386a8 8 0 0 0 -7.977-7.386h-114.79l-5.22-104.4a8 8 0 0 0 -7.99-7.6h-56v-40a71.975 71.975 0 0 0 -96-67.872 71.975 71.975 0 0 0 -96 67.872v40h-56a8 8 0 0 0 -7.99 7.6l-16 320a8 8 0 0 0 7.99 8.4h464a8 8 0 0 0 7.977-8.614zm-23.977 175.036 17.052 25.578h-34.1zm21.676 3.669-13.914-20.87-14.922-149.221h15.752zm-44.916-170.091 15 149.946-17.56 26.334-13.561-176.28zm-91.57-16h-15.057l-5.648-96h15.9zm-36.733-96 5.648 96h-16.9l-4.8-96zm-88.457-112a56.064 56.064 0 0 1 56 56v40h-32v-40a71.886 71.886 0 0 0 -26.727-55.931c.904-.043 1.812-.069 2.727-.069zm-24 5.414a56.069 56.069 0 0 1 32 50.586v40h-64v-40a56.069 56.069 0 0 1 32-50.586zm-80 50.586a56.064 56.064 0 0 1 56-56c.915 0 1.823.026 2.727.069a71.883 71.883 0 0 0 -26.727 55.931v40h-32zm96.592 360h-176.182l15.2-304h48.39v51.719l-20.438 13.625a8 8 0 0 0 -3.562 6.656v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-64a8 8 0 0 0 -3.562-6.656l-20.438-13.625v-51.719h112v24a8 8 0 0 0 16 0v-24h32.39l4.8 96h-45.19a8 8 0 0 0 -7.977 7.386zm-104.592-238.385 16 10.666v51.719h-32v-51.719zm135.408 46.385h161.184l14.769 192h-190.722z" />
              <path d="m360 304a8 8 0 0 0 -8 8v64a24.027 24.027 0 0 1 -24 24h-16a24.027 24.027 0 0 1 -24-24v-64a8 8 0 0 0 -16 0v64a40.045 40.045 0 0 0 40 40h16a40.045 40.045 0 0 0 40-40v-64a8 8 0 0 0 -8-8z" />
            </svg>

            <span>Каталог</span>
          </div>

          {/* search field */}
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <SearchField />
          </div>

          {/* user */}
          <div className={userInteractionsClasses.userInteractions__item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={17}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1={15} y1={12} x2={3} y2={12} />
            </svg>

            <span>Аккаунт</span>
          </div>

          {/* cart */}
          <div className={userInteractionsClasses.userInteractions__item}>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 485.213 485.212"
              enableBackground={"new 0 0 485.213 485.212"}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <polygon
                      points="424.562,363.906 172.036,363.906 65.893,121.304 0.001,121.304 0.001,90.978 85.737,90.978 191.876,333.584
				424.562,333.584 			"
                    />
                  </g>
                  <path
                    d="M272.934,439.727c0,25.109-20.381,45.485-45.49,45.485c-25.127,0-45.488-20.376-45.488-45.485
			c0-25.118,20.36-45.49,45.488-45.49C252.553,394.237,272.934,414.609,272.934,439.727z"
                  />
                  <path
                    d="M424.562,439.727c0,25.109-20.376,45.485-45.485,45.485c-25.118,0-45.49-20.376-45.49-45.485
			c0-25.118,20.372-45.49,45.49-45.49C404.187,394.237,424.562,414.609,424.562,439.727z"
                  />
                  <path
                    d="M379.077,242.606c-59.234,0-109.256-38.144-128.088-90.978h-99.36l60.654,151.629h212.279l35.008-87.482
			C436.944,232.42,409.255,242.606,379.077,242.606z"
                  />
                  <g>
                    <path
                      d="M379.077,0c-58.609,0-106.144,47.532-106.144,106.141c0,58.606,47.534,106.141,106.144,106.141
				c58.604,0,106.135-47.534,106.135-106.141C485.212,47.532,437.682,0,379.077,0z M362.995,159.742l-21.445-21.438l-32.161-32.163
				L330.834,84.7l32.161,32.161l64.326-64.321l21.436,21.44L362.995,159.742z"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <span>Корзина</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
