import React from "react";

const Team = (props) => {
  return (
    <div className="team">
      <h1 className="header">Brought to you by:</h1>
      <br></br>
      <div className="drawings">
        <img
          className="Leslie"
          src={`/images/Leslie.jpg`}
          className="Leslie"
          alt="temp icon"
        />{" "}
        {/* <h6>Weather App</h6> */}
        <img
          src={`/images/Julia.jpg`}
          className="Leslie"
          alt="temp icon"
        />{" "}
        {/* <h6>Nasa Image App</h6> */}
        <img
          src={`/images/Jamie.jpg`}
          className="Leslie"
          alt="temp icon"
        />{" "}
        {/* <h6>Ticketmaster App</h6> */}
      </div>
    </div>
  );
};

export default Team;
