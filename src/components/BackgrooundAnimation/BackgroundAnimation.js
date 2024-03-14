import React from 'react';
import { useDarkMode } from "next-dark-mode";

const BackgroundAnimation = () => {
  const { darkModeActive } = useDarkMode();

  return <>
    {darkModeActive ?
      <div className="hero-image">
        <div style={{height: '10rem', width: '10rem'}}/>
      </div>
      : ('')}
  </>
};

export default BackgroundAnimation;