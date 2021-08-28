import React, { useState } from "react";
import Weather from "./Weather";

const Location = () => {
  const [city, setCity] = useState("");

  let success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let geoURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(geoURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCity(data.city);
      });
  };

  let error = () => {
    console.log("unable to find location");
  };

  navigator.geolocation.getCurrentPosition(success, error);

  return <div>{<h1>Current City: {city}</h1>}</div>;
};

export default Location;
