import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import getUserLocation from "../../../requests/userLocation.request";

function Header() {
  const [city, setCity] = useState("");
  useEffect(() => {
    getUserLocation().then((city: string) => setCity(city));
  }, []);

  return <div>{city}</div>;
}

export default Header;
