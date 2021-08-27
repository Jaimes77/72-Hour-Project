import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";

const divStyle = {
  backgroundColor: '#5AB9EA',
  textAlign: 'center',
  color: '#C1C8E4',
  padding: '20px',
  margin: '20px',
  marginBottom: '50px',
  borderRadius: '50px'
};

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
    <div className="" style={divStyle} >
        <h1 id="">NASA photo</h1>
      <div className="" style={{ color: '#d9e3f0', textAlign: 'center' }}>
        <h2>This is a NASA image based on your current location!</h2>
          <img 
            className='nasa-photo' 
            alt='earth photo' 
            width='350px' 
            height='350px' 
            src={ nasaPhoto } />        
      </div>
    </div>
  );
};

export default Nasa;