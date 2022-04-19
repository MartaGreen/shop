import { USER_LOCATION_REQUEST_URL } from "../constants/request.constants";

async function getUserLocation() {
  const response = await fetch(USER_LOCATION_REQUEST_URL);

  try {
    if (response.ok) {
      const locationData = await response.json();
      const city: string = locationData.city.name_ru;
      return city;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log("userLocation server error!", err);
    return "Не определено";
  }
}

export default getUserLocation;
