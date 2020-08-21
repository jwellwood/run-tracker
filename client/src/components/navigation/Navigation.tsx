import React from 'react';
import * as routes from 'constants/routes';
import { FaHome, FaChartLine, FaUser, FaCog } from 'react-icons/fa';
// import {
//   NavContainer,
//   NavLinksContainer,
//   NavListItem,
//   NavigationLink,
//   NavLinkIcon,
//   NavLinkText,
// } from './navigation.styles';
import { Navbar, Nav } from 'react-bootstrap';
// import { useAuth } from 'hooks';

const Navigation: React.FC = () => {
  // const { isAuth } = useAuth();
  const navLinks = [
    {
      route: routes.HOME_ROUTE,
      text: 'Home',
      icon: <FaHome />,
    },
    {
      route: routes.ALL_ACTIVITIES_ROUTE,
      text: 'Activities',
      icon: <FaChartLine />,
    },
    { route: routes.PROFILE_ROUTE, text: 'Profile', icon: <FaUser /> },
    { route: routes.ABOUT_ROUTE, text: 'Settings', icon: <FaCog /> },
  ];
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Run Tracker</Navbar.Brand>
        <Nav className='mr-auto'>
          {navLinks.map((link) => (
            <Nav.Link key={link.route} href={link.route}>
              {link.icon}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      {/* <NavContainer>
        <NavLinksContainer>
          {navLinks.map((link) => (
            <NavListItem key={link.text}>
              <NavigationLink exact to={link.route}>
                <div>
                  <NavLinkIcon>{link.icon}</NavLinkIcon>
                </div>
                <NavLinkText>{link.text}</NavLinkText>
              </NavigationLink>
            </NavListItem>
          ))}
        </NavLinksContainer>
      </NavContainer> */}
    </>
  );
};

export default Navigation;
