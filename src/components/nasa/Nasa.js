import React, { useState, useEffect } from "react";

const divStyle = {
  backgroundColor: '#356B6C',
  borderColor: 'CFA59D',
  fontFamily: 'Calibri',
  textAlign: 'center',
  color: '#EAE7E4',
  padding: '20px',
  margin: '20px',
  marginBottom: '50px',
  borderRadius: '20px'
};

const Nasa = (props) => {
  const [ latitude, setLatitude ] = useState(39.768402);
  const [ longitude, setLongitude ] = useState(-86.158066);
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
    <div style={divStyle} >
        <h1 id="">NASA photo</h1>
      <div style={{ color: '#d9e3f0', textAlign: 'center' }}>
        <h2>This is a NASA image based on your current location!</h2>
          <img              
            alt='earth photo' 
            width='350px' 
            height='350px' 
            src={ nasaPhoto } />        
      </div>
    </div>
  );
};

export default Nasa;