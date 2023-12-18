import React from "react";
import "../index.css";
import Nabar from "./Nabar";
import Boxheader from "./box.header";


function Header() {
  return (
    <>
      <div className="background-image">
        <Nabar />
        <Boxheader/>
      </div>
    </>
  );
}

export default Header;
