import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
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
          <SidebarLink to="community" onClick={toggle}>
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
