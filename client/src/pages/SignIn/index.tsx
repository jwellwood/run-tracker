import React from 'react';
import SignInForm from 'components/registration/SignInForm.component';
import { PageContainer } from 'layout';
import { SIGN_IN_TITLE } from 'constants/page-titles';

const SignIn = () => {
  return (
    <PageContainer
      title={SIGN_IN_TITLE.title}
      subtitle={SIGN_IN_TITLE.subtitle}
    >
      <SignInForm />
    </PageContainer>
  );
};

export default SignIn;
