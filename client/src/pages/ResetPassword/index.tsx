import React from 'react';
import { PageContainer } from 'layout';

const ResetPassword = () => {
  return (
    <PageContainer>
      <p>@Non-auth</p>
      <p>A form to enter an email address to send a reset password email</p>
      <div>
        Links:
        <ul>
          <li>Home</li>
          <li>Sign in</li>
        </ul>
      </div>
    </PageContainer>
  );
};

export default ResetPassword;
