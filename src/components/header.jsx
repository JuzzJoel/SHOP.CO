import React from "react";
import MobileHeader from "../utilities/mobileheader.jsx";
import DesktopHeader from "../utilities/desktopheader.jsx";

function Header() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden w-auto h-auto md:block">
        <DesktopHeader />
      </div>
    </>
  );
}

export default Header;
