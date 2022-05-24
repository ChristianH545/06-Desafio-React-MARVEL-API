import React from "react";
import logo from "../../exports/Imagenes";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="marvel">
        <Link to="/">
          <img className="logo" src={logo} alt="" width="800" height="200" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
