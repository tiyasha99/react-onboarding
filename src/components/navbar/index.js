import React from 'react'
import {FaBars} from 'react-icons/fa'
import { NavbarContainer, 
  Nav, 
  NavLogo, 
  NavItem, 
  MobileIcon, 
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements'
import {useHistory} from "react-router-dom";



const Navbar = ({toggle}) => {

  let history = useHistory();
  function onClickHandle()
  {
    history.push('/Community');
  }
  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo>
          befriend
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Community" onClick={onClickHandle}>Community</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="aboutUs">About Us</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="workshop">Workshop</NavLinks>
          </NavItem>
          
        </NavMenu>
        
        <NavBtn>
          <NavLinks to="signUp">Sign Up</NavLinks>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
        
      </NavbarContainer>
    </Nav>
   </>
   
  );
};

export default Navbar;
