import React from 'react';
import * as routes from 'constants/routes';
import { FaHome, FaChartLine, FaUser, FaCog } from 'react-icons/fa';
import {
  NavContainer,
  NavLinksContainer,
  NavListItem,
  NavigationLink,
  NavLinkIcon,
  NavLinkText,
} from './navigation.styles';

const Navigation: React.FC = () => {
  const navLinks = [
    {
      route: routes.HOME_ROUTE,
      text: 'Home',
      icon: <FaHome />,
    },
    {
      route: routes.ALL_RECORDS_ROUTE,
      text: 'Records',
      icon: <FaChartLine />,
    },

    { route: routes.PROFILE_ROUTE, text: 'Profile', icon: <FaUser /> },
    // {
    //   route: routes.EDIT_PROFILE_ROUTE,
    //   text: 'Edit Profile',
    //   icon: <GrUserSettings />,
    // },

    // { route: routes.REGISTER_ROUTE, text: 'Register', icon: <GrLogin /> },
    // {
    //   route: routes.RESET_PASSWORD_ROUTE,
    //   text: 'Reset Password',
    //   icon: <GrLogin />,
    // },
    // { route: routes.ADD_RECORD_ROUTE, text: 'Add record', icon: <GrAdd /> },
    // { route: routes.EDIT_RECORD_ROUTE, text: 'Edit record', icon: <GrEdit /> },

    { route: routes.ABOUT_ROUTE, text: 'Settings', icon: <FaCog /> },
    // { route: routes.RECORD_ROUTE, text: 'Single record', icon: <GrRun /> },
  ];
  return (
    <>
      <NavContainer>
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
      </NavContainer>
    </>
  );
};

export default Navigation;
