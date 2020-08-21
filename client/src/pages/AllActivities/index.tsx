import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from 'constants/routes';
import { PageContainer } from 'layout';
import { FaPlus, FaEdit, FaRunning } from 'react-icons/fa';

const AllActivities = () => {
  const links = [
    {
      route: routes.ADD_ACTIVITY_ROUTE,
      icon: <FaPlus />,
      text: 'Add Activity',
    },
    {
      route: routes.EDIT_ACTIVITY_ROUTE,
      icon: <FaEdit />,
      text: 'Edit Activity',
    },
    {
      route: routes.ACTIVITY_ROUTE,
      icon: <FaRunning />,
      text: 'Individual Activity',
    },
  ];
  return (
    <PageContainer>
      <p>@Private</p>
      <p>A list ordered by date of all the activities for the user</p>

      <div>
        Links:
        <ul>
          {links.map((link) => (
            <li key={link.route}>
              <Link to={link.route}>
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
};

export default AllActivities;
