import { useEffect, useState } from "react";

function GetLocation() {
  const [locationData, setLocationData] = useState("");
  const getCurrntLocation = (position) => {
    console.log("position:", position);
    const data = {
      lat: position.coords.latitude,
      long: position.coords.latitude,
    };
    setLocationData(data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getCurrntLocation);
  }, []);

  console.log("locationData:::::", locationData);

  return (
    <main>
      <h1>Get location</h1>
      <h4>Latitude: {locationData.lat}</h4>
      <h4>Longitude: {locationData.long}</h4>
    </main>
  );
}

export default GetLocation;
