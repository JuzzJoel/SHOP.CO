import React from 'react'
import MobileHero from '../utilities/mobilehero'
import DesktopHero from "../utilities/desktophero";

function Hero() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <MobileHero />
      </div>{" "}
      <div className="flex items-center justify-center w-full h-full">
        <DesktopHero />
      </div>
    </>
  );
}

export default Hero
