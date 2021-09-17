import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          <h1>LAKSHMI</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>.is()</NavLink>
          <NavLink to="/about" activeStyle>
            .about()
          </NavLink>
          <NavLink to="/webdev" activeStyle>
            .webdev()
          </NavLink>
          <NavLink to="/fusion360" activeStyle>
            .fusion360()
          </NavLink>
          <NavLink to="/poetry" activeStyle>
            .poetry()
          </NavLink>
          <NavLink to="/art" activeStyle>.art()</NavLink>
          <NavLink to="/contact" activeStyle>.contact()</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
     
      </Nav>
    </>
  );
};

export default Navbar;
