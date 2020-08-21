import React from 'react';
import { ListGroup } from 'react-bootstrap';
import LinkButton from 'components/ui/buttons/LinkButton';
import { EDIT_PROFILE_ROUTE } from 'constants/routes';

interface Props {
  profile: any; // TODO
}

const ProfileSettings: React.FC<Props> = ({ profile }) => {
  const { location, darkTheme, metricUnits } = profile;
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>{location}</ListGroup.Item>
      <ListGroup.Item>{darkTheme ? 'DARK' : 'LIGHT'} THEME</ListGroup.Item>
      <ListGroup.Item>{metricUnits ? 'm / km' : 'miles'}</ListGroup.Item>
      <ListGroup.Item>
        <LinkButton link={EDIT_PROFILE_ROUTE}>Edit Profile</LinkButton>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProfileSettings;
