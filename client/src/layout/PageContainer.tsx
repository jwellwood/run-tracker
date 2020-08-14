// import styled from 'styled-components';

// export const PageContainer = styled.div`
//   text-align: center;
//   @media (max-width: 768px) {
//     margin-bottom: 5rem;
//   }
//   @media (min-width: 768px) {
//     margin-left: 5rem;
//   }
// `;

import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h6>{subtitle}</h6>
      {children}
    </Container>
  );
};

export default PageContainer;
