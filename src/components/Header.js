import React from "react";
import logo from './../logo.png'
import { Link } from "react-router-dom";

export const Header = () =>  {

  return (
    <header>
      <Link to="/">
      <img className="logo" src={logo} alt="Geo-Gist home" />
      </Link>
    </header>
  )
}