import { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Weather = (props) => {
  let apiKey = "fd18b03e8677888ed6de2e157e4e2db6";
  let cityofTemp = props.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityofTemp}&appid=${apiKey}`;

  const [typeOfTemp, setTypeOfTemp] = useState(true);
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  let fetchURL = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setCelsius((data.main.temp - 273.15).toFixed(0));
    setFahrenheit(((data.main.temp - 273.15) * 1.8 + 32).toFixed(0));
  };

  useEffect(() => {
    fetchURL();
  }, []);

  const temperature = typeOfTemp ? " Celsius" : " Fahrenheit";
  const changeTemperature = typeOfTemp ? " Fahrenheit" : " Celsius";
  const ctf = typeOfTemp ? celsius : fahrenheit;

  let handleClick = () => {
    setTypeOfTemp(!typeOfTemp);
  };

  return (
    <div className="card mt-3 mx-auto" style={{ width: "50vw" }}>
      <div class="card-body text-center">
        <h1>Weather </h1>
        <img
          src={`https://cdn.icon-icons.com/icons2/1365/PNG/512/cloud_89333.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp;&nbsp;
        <img
          src={`http://cdn.onlinewebfonts.com/svg/img_117597.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp;
        <img
          src={`https://static.thenounproject.com/png/218414-200.png`}
          className="temp-icon"
          alt="temp icon"
        />
        &nbsp;
        <img
          src={`https://cdn0.iconfinder.com/data/icons/weather-line/512/snow-512.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp;&nbsp;
        <img
          src={`https://static.thenounproject.com/png/74032-200.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        <div className="row mt-4">
          <p className="text">
            The temperature in your city is <strong>{ctf}°</strong>
            <strong>{temperature}</strong>. Click the below button to change the
            temperature to
            <strong>{changeTemperature}</strong>
          </p>
          <Button
            className="button"
            outline
            color="secondary"
            onClick={handleClick}
            style={{ width: "13vw" }}
          >
            Change Temperature Type
          </Button>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Weather;
