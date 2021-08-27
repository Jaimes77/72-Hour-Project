import React, { useState, useEffect } from "react";

const Nasa = (props) => {
  const [latitude, setLatitude] = useState(37.566536);
  const [longitude, setLongitude] = useState(126.977966);
  const [ nasaPhoto, setNasaPhoto ] = useState('');  
  
  const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
  const key = 'KYqTtPHmCW4ZDAMpTrGagz9eJfHNOxDe900Dffco';
  const url = `${baseURL}?lon=${longitude}&lat=${latitude}&api_key=${key}`;
  
  let fetchResult = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setNasaPhoto(data.url))
      .catch(err => console.log(err))  
  }
  useEffect( () => {
    fetchResult();
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 id="">NASA photo</h1>
        <h2>This is a NASA image based on your current location!</h2>
          <img src={ nasaPhoto } />        
      </div>
    </div>
  );
};

export default Nasa;