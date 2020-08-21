import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from 'layout';
import { FaUserPlus, FaSignInAlt, FaKey } from 'react-icons/fa';
import * as routes from 'constants/routes';
import { useAuth } from 'hooks';
import CustomSpinner from 'components/ui/spinners/Spinner.component';

const Home: React.FC = () => {
  const { isAuth, loading } = useAuth();
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
  return loading ? (
    <CustomSpinner />
  ) : (
    <PageContainer>
      <p>@Public</p>
      <p>Simple home page. Animated logo and a button to get started</p>
      <div>
        Links:
        {isAuth ? (
          <div>Is auth</div>
        ) : (
          <ul>
            {links.map((link) => (
              <Link key={link.route} to={link.route}>
                <li>
                  {link.icon} {link.text}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </PageContainer>
  );
};

export default Home;
