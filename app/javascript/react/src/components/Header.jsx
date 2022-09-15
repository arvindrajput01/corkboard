import React ,{Fragment,useState}from "react";
import { NavLink } from "react-router-dom";
import { Navbar,NavDropdown,Form,FormControl,Button,Dropdown } from 'react-bootstrap'

import styled from 'styled-components'
import { bubble as Menu } from 'react-burger-menu'; //we can use slide instead of bubble
import '../stylesheet/Sidebar.css';

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #fffff;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  border-bottom: 1px solid rgb(205, 209, 210);
  border-top: 1px solid rgb(25,121,169);
  border-top-width:3px;
  border-bottom-width:thin;
  position: fixed;


`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

function Header() {



  return (
    <Wrapper>
    <Container>
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
    </Container>
    </Wrapper>
    


  );
}
export default Header;