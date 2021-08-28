import React, { useState, useEffect } from "react";

// const divStyle = {
//   backgroundColor: "#356B6C",
//   borderColor: "gray",
//   fontFamily: "Calibri",
//   textAlign: "center",
//   color: "#EAE7E4",
//   padding: "20px",
//   margin: "20px",
//   marginBottom: "50px",
//   borderRadius: "20px",
// };

const Nasa = (props) => {
  const [nasaPhoto, setNasaPhoto] = useState("");
  let latitude = props.lat;
  let longitude = props.long;

  const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
  const key = "KYqTtPHmCW4ZDAMpTrGagz9eJfHNOxDe900Dffco";
  const url = `${baseURL}?lon=${longitude}&lat=${latitude}&date=2021-08-20&api_key=${key}&dim=0.10`;

  // console.log(longitude);
  // console.log(latitude);

  function fetchResult() {
    fetch(url)
      .then((res) => setNasaPhoto(res.url))

      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className="nasa">
      <h1 id="">NASA Photo</h1>
      <div>
        <img
          src={`https://www.pinclipart.com/picdir/middle/567-5671202_camera-icon-transparent-background-clipart.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp;&nbsp;&nbsp;
        <img
          src={`https://cdn3.iconfinder.com/data/icons/space-66/100/Artboard_17-512.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp;
        <img
          src={`https://static.thenounproject.com/png/2820184-200.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp;&nbsp;
        <img
          src={`https://image.flaticon.com/icons/png/512/921/921439.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        <img
          src={`https://cdn0.iconfinder.com/data/icons/typicons-2/24/location-arrow-512.png`}
          className="temp-icon"
          alt="temp icon"
        />{" "}
        &nbsp; &nbsp;&nbsp; <br></br>
        <br></br>
        <h6 className="nasatext">
          This is a NASA image based on your current location!
        </h6>
        <br></br>
        <img
          className="nasaimage"
          alt="earth photo"
          width="350px"
          height="350px"
          src={nasaPhoto}
        />
      </div>
    </div>
  );
};

export default Nasa;
