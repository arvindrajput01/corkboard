import React ,{Fragment,useState}from "react";
import { NavLink } from "react-router-dom";
import { Navbar,NavDropdown,Form,FormControl,Button,Dropdown } from 'react-bootstrap'

import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu';
import '../stylesheet/Sidebar.css';

function Header() {



  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
    


  );
}
export default Header;