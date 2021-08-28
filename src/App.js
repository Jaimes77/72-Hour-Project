import { useState, useEffect } from "react";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
import Team from "./components/team/Team";
import TicketmasterParent from "./components/Ticketmaster/TicketmasterParent";
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
        setCity(data.locality);
        setLat(data.latitude);
        setLong(data.longitude);
        // console.log(latitude);
        // console.log(longitude);
      });
  };

  let error = () => {
    console.log("unable to find location");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div className="background">
      {city.length > 0 ? <Weather city={city} /> : "Loading"}

      {lat && long ? <Nasa lat={lat} long={long} /> : "Loading"}

      {lat && long ? <TicketmasterParent lat={lat} long={long} /> : "Loading"}

      <Team />
    </div>
  );
}

export default App;

//need to create a prop variable in the child file that associated the prop.NAME from app.js file
