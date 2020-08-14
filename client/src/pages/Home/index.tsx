import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from 'layout';
import { FaUserPlus, FaSignInAlt, FaKey } from 'react-icons/fa';
import * as routes from 'constants/routes';

const Home: React.FC = () => {
  const links = [
    { route: routes.REGISTER_ROUTE, icon: <FaUserPlus />, text: 'Register' },
    {
      route: routes.SIGN_IN_ROUTE,
      icon: <FaSignInAlt />,
      text: 'Sign in',
    },
    {
      route: routes.RESET_PASSWORD_ROUTE,
      icon: <FaKey />,
      text: 'Reset Password',
    },
  ];
  return (
    <PageContainer>
      <p>@Public</p>
      <p>Simple home page. Animated logo and a button to get started</p>
      <div>
        Links:
        <ul>
          {links.map((link) => (
            <Link key={link.route} to={link.route}>
              <li>
                {link.icon} {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
};

export default Home;
