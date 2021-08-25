import React from "react";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
import Ticketmaster from "./components/ticketmaster/Ticketmaster";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div>
      <Nasa />
      <Weather />
      <Ticketmaster />
    </div>
  );
}

export default App;
