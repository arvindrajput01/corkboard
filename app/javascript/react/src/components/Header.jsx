import React ,{Fragment,useState}from "react";
import { NavLink } from "react-router-dom";
import { Navbar,NavDropdown,Form,FormControl,Button,Dropdown } from 'react-bootstrap'

import styled from 'styled-components'
import { bubble as Menu } from 'react-burger-menu'; //we can use slide instead of bubble
import HeaderSearch from './HeaderSearch'
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
const Nav = styled.nav`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

`
const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;

`

const Right = styled.div`

  margin-right: 24px;
  align-self: flex-end !important;
  width:20%;
  height:50px;

`

function Header() {



  return (
    <Wrapper>
    <Container>
     <Nav>
     <Left>
    <Menu>
      <a className="menu-item" href="/">
        Dashboard
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
    </Left>
        <Right>
    <HeaderSearch/>
    </Right>
     </Nav >
    </Container>

    </Wrapper>
    


  );
}
export default Header;