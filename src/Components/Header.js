import React from "react";
import "../Header.css";
import CapivaraIcon from "../capiIcon.webp";

function Header() {
  return (
    <div className='header'>
      <img style={{ width: "5rem" }} alt='Capivara' src={CapivaraIcon} />
      <h3 className='header__title'>Random Capi</h3>
    </div>
  );
}

export default Header;
