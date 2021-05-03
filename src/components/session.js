import React from 'react';
import img from './img.jpeg'; // Tell webpack this JS file uses this image

callFrame = window.DailyIframe.createFrame();
callFrame.join({ url: 'https://pinmi.daily.co/hello' })


