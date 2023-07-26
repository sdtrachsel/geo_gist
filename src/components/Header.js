import React from "react";
import logo from './../logo.png'

export const Header = () =>  {

  return (
    <header>
      <img className="logo" src={logo} alt="Geo-Gist home" />
    </header>
  )
}