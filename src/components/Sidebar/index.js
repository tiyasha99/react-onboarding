import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';
import {useHistory} from "react-router-dom";
const Sidebar = ({isOpen, toggle}) => {
  let history = useHistory();
  function onClickHandle()
  {
    history.push('/Community');
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/Community" onClick={onClickHandle}>
            Community
          </SidebarLink>
          <SidebarLink to="aboutUs" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="workshop" onClick={toggle}>
            Workshop
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login" onClick={toggle}>Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
      
    </SidebarContainer>
  )
}

export default Sidebar
