import { useState, useEffect } from "react";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
import Ticketmaster from "./components/ticketmaster/Ticketmaster";
import Weather from "./components/weather/Weather";

function App() {
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  let success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let geoURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(geoURL)
      .then((res) => res.json())
      .then((data) => {
        setCity(data.city);
        setLat(data.latitude);
        setLong(data.longitude);
      });
  };

  let error = () => {
    console.log("unable to find location");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div>
      {/* <Nasa /> */}
      {city.length > 0 ? <Weather city={city} /> : "Loading"}
      {/* <Ticketmaster /> */}
      {/* Hello */}
      <Nasa />
      <Ticketmaster />
    </div>
  );
}

export default App;

//need to create a prop variable in the child file that associated the prop.NAME from app.js file
