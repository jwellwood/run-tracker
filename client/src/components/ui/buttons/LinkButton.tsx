import React, { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  children: ReactNode;
}

const LinkButton: React.FC<Props> = ({ link, children }) => {
  return (
    <Button variant='link' as={Link} to={link}>
      {children}
    </Button>
  );
};

export default LinkButton;
