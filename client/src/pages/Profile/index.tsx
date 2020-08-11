import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from 'layout/PageContainer';
import { FaUserEdit } from 'react-icons/fa';
import * as routes from 'constants/routes';

const Profile = () => {
  const links = [
    {
      route: routes.EDIT_PROFILE_ROUTE,
      icon: <FaUserEdit />,
      text: 'Edit Profile',
    },
  ];
  return (
    <PageContainer>
      <p>@Private</p>
      <p>
        A page with the user's details, including total times/distances and
        account details: username, email, location etc.
      </p>
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

export default Profile;
