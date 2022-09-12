import React ,{Fragment,useState}from "react";
import { NavLink } from "react-router-dom";
import { Navbar,NavDropdown,Form,FormControl,Button,Dropdown } from 'react-bootstrap'

import styled from 'styled-components'

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #f0f0f4;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  border-bottom: 1px solid rgba(208, 13, 13, 0.1);
  border-top: 1px solid rgba(204, 12, 12, 0.67);
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
  margin-left:20px;
`

const Right = styled.div`

  margin-right: 24px;
  width:50%
  a {
    color: #000;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Li = styled.li`
  a {

  text-decoration: none;
  padding: 5px;
  display: inline-block;
  }

`
const SignIn = styled.li`
  a {
  color:#0a5bdb;
  text-decoration: none;
  padding: 5px;
  display: inline-block;
  }

`

const Logo = styled.span`
  font-family: 'Poppins-ExtraBold';
  font-weight: bold;
  font-size: 20px;

  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
  `
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isROpen, setIsROpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const toggleRPopup = () => {
    setIsROpen(!isROpen);
  }
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  )


  return (
    <Wrapper id="nav">
    <Container>
    <Nav >
      <Left>
          <Logo> 
            
          </Logo>
      </Left>
      <Right>
        <Menu>
        
             <Li> 
              <NavLink exact activeClassName="active" to="/">        Dashboard 
              </NavLink>
            </Li>
            <Li> 
              <NavLink activeClassName="active" to="/Ruby">        Ruby
              </NavLink>
            </Li>
            <Li> 
              <NavLink activeClassName="active" to="/Javascript">        Javascript
              </NavLink>
            </Li>
            <Li> 
                <Dropdown>
                <Dropdown.Toggle 
                variant="" 
                id="dropdown-basic">
                    More Tutorial
                </Dropdown.Toggle>

                <Dropdown.Menu style={{backgroundColor:'#f0f0f4'}}>
                    <Dropdown.Item href="#" >React</Dropdown.Item>
                    <Dropdown.Item href="#" >Html</Dropdown.Item>
                    <Dropdown.Item href="#" >RoR Episode</Dropdown.Item>
                    <Dropdown.Item href="#" >Javascript Episode</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Li>
            <Li> 
              <NavLink   to="/AboutMe">        About Me
              </NavLink>
            </Li>
  

        </Menu>
      </Right>


    </Nav>
    </Container>
    </Wrapper>


  );
}
export default Header;