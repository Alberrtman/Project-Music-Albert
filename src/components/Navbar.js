import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  const location = useLocation(); // mengambil informasi lokasi URL saat ini
  const segments = location.pathname.split("/"); // memecah path URL menjadi array
  const firstSegment = segments[1]; // mengambil segment ketiga dari array
  console.log(firstSegment);
  return (
    <Nav as="ul" className="nav nav-tabs">
      <Nav.Item as="li">
        <NavLink
          exact
          to="/dataUser"
          className="nav-link"
          activeClassName={firstSegment === "dataUser" ? "active" : ""}
        >
          Data User
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/dataProduk"
          className="nav-link"
          activeClassName={firstSegment === "dataProduk" ? "active" : ""}
        >
          Data Produk
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/dataBanner"
          className="nav-link"
          activeClassName={firstSegment === "dataBanner" ? "active" : ""}
        >
          Data Banner
        </NavLink>
      </Nav.Item>
      
    </Nav>
    
  );
}

export default Navbar;
