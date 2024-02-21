/* eslint-disable @next/next/no-img-element */

import "../style/navbar.css"
import "../src/app/globals.css"
import React, { useState } from "react"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <div className="navbarContainer">
      <div className="logo">
        <img src="../images/gt-removebg-preview.png" alt="Logo" />
      </div>
      <div className="hamburgerMenu" onClick={toggleMenu}>
        {showMenu ? (
          <img
            className="hamburgerMenu"
            src="../images/crossByurger.svg"
            alt="Close Menu"
          />
        ) : (
          <img
            className="hamburgerMenu"
            src="../images/hamburger_menu.svg"
            alt="Open Menu"
          />
        )}
      </div>
      <div className={`menuItems ${showMenu ? "show" : ""}`}>
        <a href="#">I-HYBRID</a>
        <a href="#">PURE EV</a>
        <a href="#">ABOUT</a>
        <a href="#">INSIGHTS</a>
        <a href="#">MOBILITY SOLUTION</a>
        <div>
          <button className="button_pink">CONTACT</button>
        </div>
      </div>
      {/* <div className="tabs">
        <a href="#">Tab 1</a>
        <a href="#">Tab 2</a>
        <a href="#">Tab 3</a>
      </div> */}
      {showMenu && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  )
}
