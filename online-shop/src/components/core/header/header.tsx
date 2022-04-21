import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import getUserLocation from "../../../requests/userLocation.request";
import styles, { userInteractionsStyles } from "./header.style";

import Dropdown from "../../../shared/dropdown/dropdown";
import { paymentDropdown, contactDropdown } from "./headerData";

import SearchField from "./searchField/searchField";
import { useDispatch } from "react-redux";

import { getCategoriesReducer } from "../../../redux/slices/categoriesSlice";
import { AppDispatch } from "../../../redux";
import { useSelector } from "react-redux";
import IStoreState from "../../../interfaces-types/store.interface";

function Header() {
  const [city, setCity] = useState("");
  useEffect(() => {
    getUserLocation().then((city: string) => setCity(city));
  }, []);

  const classes = styles();
  const userInteractionsClasses = userInteractionsStyles();

  const dispatch: AppDispatch = useDispatch();
  const storeData = useSelector((state: IStoreState) => state.categories);
  console.log(storeData);

  useEffect(() => {
    dispatch(getCategoriesReducer());
  }, []);

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
          {/* icon */}
          <div className={userInteractionsClasses.userInteractions__icon}>
            <>
              {/*?xml version="1.0" ?*/}
              <svg
                height={"100%"}
                id="svg6449"
                version="1.1"
                viewBox="0 0 33.866666 33.866668"
                width={"auto"}
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:cc="http://creativecommons.org/ns#"
                // xmlns:dc="http://purl.org/dc/elements/1.1/"
                // xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                // xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                // xmlns:svg="http://www.w3.org/2000/svg"
              >
                <defs id="defs6443">
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath5143">
                    <ellipse
                      cx="209.94763"
                      cy="1573.1123"
                      id="ellipse5145"
                      rx="55.764446"
                      ry="55.766594"
                      style={{
                        display: "inline",
                        opacity: "0.43500001",
                        fill: "#ffaaaa",
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "4.21448183",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath11046">
                    <ellipse
                      cx="209.94763"
                      cy="1380.6261"
                      id="ellipse11048"
                      rx="55.76445"
                      ry="55.766594"
                      style={{
                        display: "inline",
                        opacity: "0.47600002",
                        fill: "#ffaaaa",
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "4.21448183",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath8754">
                    <ellipse
                      cx="205.48343"
                      cy="1298.3982"
                      id="ellipse8756"
                      rx="78.18396"
                      ry="83.010139"
                      style={{
                        display: "inline",
                        opacity: "0.419",
                        fill: "#ffaaaa",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "4.21448183",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath5060">
                    <ellipse
                      cx="68.499527"
                      cy="1656.6876"
                      id="ellipse5062"
                      rx="71.409416"
                      ry="71.223892"
                      style={{
                        display: "inline",
                        opacity: "0.45199998",
                        fill: "#ffe680",
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "4.21448183",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath6174">
                    <ellipse
                      cx="128.2972"
                      cy="1416.0679"
                      id="ellipse6176"
                      rx="55.76445"
                      ry="55.766594"
                      style={{
                        display: "inline",
                        opacity: "0.572",
                        fill: "#ff9696",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "4.21448183",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath5292">
                    <ellipse
                      cx="554.68481"
                      cy="1234.8002"
                      id="ellipse5294"
                      rx="46.906162"
                      ry="46.90797"
                      style={{
                        display: "inline",
                        opacity: "0.469",
                        fill: "#ffaaaa",
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "3.5625",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath6537">
                    <ellipse
                      cx="2254.0229"
                      cy="1364.222"
                      id="ellipse6539"
                      rx="114.45508"
                      ry="114.4127"
                      style={{
                        display: "inline",
                        fill: "#d9ed88",
                        fillOpacity: "0.6",
                        fillRule: "evenodd",
                        stroke: "#333333",
                        strokeWidth: "9.00000095",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: "6.5999999",
                        strokeOpacity: 1,
                      }}
                    />
                  </clipPath>
                </defs>
                <g id="layer1" transform="translate(0,-263.13332)">
                  <g
                    id="g5324"
                    transform="matrix(0.28222223,0,0,0.28222223,-85.810023,-54.139715)"
                  >
                    <g id="g5184" transform="translate(154.10362,-392.64649)">
                      <ellipse
                        cx="211.01534"
                        cy="1628.6257"
                        id="ellipse5081"
                        rx="53.059589"
                        ry="7.7109265"
                        style={{
                          opacity: "0.694",
                          fill: "#808080",
                          fillRule: "evenodd",
                          stroke: "none",
                          strokeWidth: "0.47325075px",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeOpacity: 1,
                        }}
                      />
                      <ellipse
                        cx="209.94763"
                        cy="1575.2217"
                        id="ellipse5083"
                        rx="55.76445"
                        ry="55.766594"
                        style={{
                          display: "inline",
                          fill: "#ffd479",
                          fillOpacity: 1,
                          fillRule: "evenodd",
                          stroke: "#333333",
                          strokeWidth: "4.21448183",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeDashoffset: "6.5999999",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        d="m 257.83155,1570.1186 c 1.65231,6.0465 0.68641,11.0479 -0.61012,16.0948"
                        id="path5085"
                        style={{
                          opacity: 1,
                          fill: "none",
                          fillOpacity: 0,
                          fillRule: "evenodd",
                          stroke: "#ffffff",
                          strokeWidth: "2.80965424",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeDashoffset: 0,
                          strokeOpacity: 1,
                        }}
                      />
                      <ellipse
                        cx="404.043"
                        cy="1531.9664"
                        id="ellipse5087"
                        rx="1.6825458"
                        ry="1.6826104"
                        style={{
                          fill: "#ffffff",
                          fillOpacity: 1,
                          fillRule: "evenodd",
                          stroke: "#ffffff",
                          strokeWidth: "0.46827573px",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeOpacity: 1,
                        }}
                        transform="rotate(5.4689904)"
                      />
                      <path
                        d="m 163.96494,1555.1591 c 0.0371,0.023 3.19764,-11.8609 19.45002,-20.2782 7.24571,-3.7379 16.25639,-6.0739 26.24495,-5.8102 0.12325,0 0.24638,0.01 0.36939,0.011 10.20392,0.3289 19.27236,3.2296 26.47851,7.0984 7.38317,3.9594 12.45666,8.7569 15.5429,12.4751 3.09292,3.7262 4.1926,6.2834 3.88811,6.504 -0.39823,0.2885 -2.16586,-1.767 -5.61357,-4.845 -3.46496,-3.0934 -8.58802,-7.1296 -15.66481,-10.4795 -6.90524,-3.2647 -15.36887,-5.7277 -24.78162,-6.0229 -0.11343,0 -0.22697,-0.01 -0.3406,-0.01 -9.20428,-0.23 -17.49728,1.6828 -24.30735,4.8014 -7.21896,3.2897 -12.43413,7.8367 -15.77649,11.1732 -3.38962,3.3838 -5.05743,5.6538 -5.48944,5.3823 z"
                        id="path5089"
                        style={{
                          opacity: 1,
                          fill: "#ffffff",
                          fillOpacity: 1,
                          fillRule: "evenodd",
                          stroke: "none",
                          strokeWidth: "9.46501446",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeDashoffset: 0,
                          strokeOpacity: 1,
                        }}
                      />
                      <g clipPath="url(#clipPath5143)" id="g5141">
                        <g
                          clipPath="none"
                          id="g5079"
                          style={{ strokeWidth: "1.22063828" }}
                          transform="matrix(0.81884882,0,0,0.81963837,31.45413,456.33151)"
                        >
                          <path
                            d="m 221.55758,1366.7123 c -29.01748,-0.5935 -47.40466,22.7857 -48.8179,45.1469 -1.80802,28.6077 23.20441,47.6643 45.20962,48.5704 23.07244,0.9502 49.38109,-12.4596 51.3649,-46.8587 1.29796,-22.5057 -21.36673,-46.3188 -47.75662,-46.8586 z"
                            id="path5059"
                            style={{
                              fill: "#ff9955",
                              fillOpacity: 1,
                              fillRule: "evenodd",
                              stroke: "#333333",
                              strokeWidth: "5.03513288",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 4,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                          />
                          <path
                            d="m 219.70899,1373.8704 c -0.93561,-8.3835 -0.66486,-16.7671 0.1956,-25.1505 1.15066,0.4922 2.30129,0.7715 3.45195,2.4208 -1.11563,8.1075 -1.43578,15.9288 0.23799,23.0323 z"
                            id="path5061"
                            style={{
                              fill: "#a05a2c",
                              fillOpacity: 1,
                              fillRule: "evenodd",
                              stroke: "#333333",
                              strokeWidth: "5.03513288",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 4,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                          />
                          <path
                            d="m 169.85239,1385.1822 c 11.23854,-12.9985 29.49498,-9.4857 41.49523,-14.3358 3.44164,-1.3909 7.11044,-7.1678 7.11044,-7.1678 0,0 -8.17841,-9.6957 -20.06329,-8.5676 -15.03922,1.4273 -23.17861,16.3072 -28.54238,30.0712 z"
                            id="path5063"
                            style={{
                              fill: "#5aa02c",
                              fillRule: "evenodd",
                              stroke: "#333333",
                              strokeWidth: "5.03513288",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 4,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                          />
                          <path
                            d="m 211.26716,1378.0334 c 7.65363,-3.438 13.70933,-2.8275 21.24911,-0.4044"
                            id="path5065"
                            style={{
                              fill: "none",
                              fillRule: "evenodd",
                              stroke: "#333333",
                              strokeWidth: "5.03513288",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 4,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                          />
                        </g>
                        <path
                          d="m 213.11054,1578.4164 c -22.68308,-0.4617 -37.05746,17.7211 -38.1622,35.1124 -0.66063,10.4003 3.26167,19.1757 9.38149,25.6468 21.66214,2.8246 47.72176,-34.9846 39.50057,-58.6041 -3.43521,-1.1391 -7.00307,-2.0796 -10.71986,-2.1551 z"
                          id="path5099"
                          style={{
                            opacity: 1,
                            vectorEffect: "none",
                            fill: "#f5863c",
                            fillOpacity: 1,
                            fillRule: "evenodd",
                            stroke: "none",
                            strokeWidth: "0.9375px",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 4,
                            strokeDasharray: "none",
                            strokeDashoffset: 0,
                            strokeOpacity: 1,
                          }}
                        />
                      </g>
                      <path
                        d="m 211.36258,1582.4084 c -0.76613,-6.8714 -0.54442,-13.743 0.16016,-20.6143 0.94222,0.4034 1.88441,0.6323 2.82663,1.9842 -0.91353,6.6452 -1.17569,13.0558 0.19488,18.8781 z"
                        id="path5121"
                        style={{
                          fill: "#a05a2c",
                          fillOpacity: 1,
                          fillRule: "evenodd",
                          stroke: "#333333",
                          strokeWidth: "4.125",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        d="m 170.53756,1591.68 c 9.20266,-10.6541 24.15193,-7.7749 33.97832,-11.7502 2.81818,-1.14 5.82237,-5.875 5.82237,-5.875 0,0 -6.69688,-7.947 -16.4288,-7.0223 -12.31484,1.1699 -18.97977,13.366 -23.37189,24.6475 z"
                        id="path5123"
                        style={{
                          fill: "#5aa02c",
                          fillRule: "evenodd",
                          stroke: "#333333",
                          strokeWidth: "4.125",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                      <path
                        d="m 204.44999,1585.8206 c 6.26717,-2.818 11.22587,-2.3176 17.39981,-0.3315"
                        id="path5125"
                        style={{
                          fill: "none",
                          fillRule: "evenodd",
                          stroke: "#333333",
                          strokeWidth: "4.125",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                          strokeDasharray: "none",
                          strokeOpacity: 1,
                        }}
                      />
                    </g>
                    <path
                      d="m 342.06837,1205.7521 c -5.09573,6.0842 -6.20463,14.8255 -5.92205,17.4554"
                      id="path5228"
                      style={{
                        opacity: 1,
                        fill: "none",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#ffffff",
                        strokeWidth: "2.7711494",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: 0,
                        strokeOpacity: 1,
                      }}
                    />
                    <ellipse
                      cx="-345.85721"
                      cy="1201.6169"
                      id="ellipse5230"
                      rx="1.4877937"
                      ry="1.5887858"
                      style={{
                        fill: "#ffffff",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "none",
                        strokeWidth: "0.4618583px",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeOpacity: 1,
                      }}
                      transform="scale(-1,1)"
                    />
                  </g>
                </g>
              </svg>
            </>
          </div>

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
            className={userInteractionsClasses.userInteractions__searchField}
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
