import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from 'constants/routes';
import { PageContainer } from 'layout/PageContainer';
import { FaPlus, FaEdit, FaRunning } from 'react-icons/fa';

const AllRecords = () => {
  const links = [
    { route: routes.ADD_RECORD_ROUTE, icon: <FaPlus />, text: 'Add Record' },
    {
      route: routes.EDIT_RECORD_ROUTE,
      icon: <FaEdit />,
      text: 'Edit Record',
    },
    {
      route: routes.RECORD_ROUTE,
      icon: <FaRunning />,
      text: 'Individual Record',
    },
  ];
  return (
    <PageContainer>
      <p>@Private</p>
      <p>A list ordered by date of all the records for the user</p>

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

export default AllRecords;
