import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { IProfile } from 'common/profile.type';
import LinkButton from 'components/ui/buttons/LinkButton';
import { EDIT_PROFILE_ROUTE } from 'constants/routes';

interface Props {
  profile: IProfile; // TODO
  onSignOut: () => void;
}

const ProfileSettings: React.FC<Props> = ({ profile, onSignOut }) => {
  const { location, hasDarkTheme, hasMetric } = profile;
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>{location}</ListGroup.Item>
      <ListGroup.Item>{hasDarkTheme ? 'DARK' : 'LIGHT'} THEME</ListGroup.Item>
      <ListGroup.Item>{hasMetric ? 'm / km' : 'miles'}</ListGroup.Item>
      <ListGroup.Item>
        <LinkButton link={EDIT_PROFILE_ROUTE}>Edit Profile</LinkButton>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button onClick={onSignOut}>Logout</Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProfileSettings;
