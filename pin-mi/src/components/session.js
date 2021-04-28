import React from 'react';
import img from './img.jpeg'; // Tell webpack this JS file uses this image


export default function Call() {
  // Import result is the URL of your image
  return <img src={img} alt="Logo" />;
}

