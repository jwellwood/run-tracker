import React from 'react';
import RegisterForm from 'components/registration/RegisterForm.component';
import { PageContainer } from 'layout';
import { REGISTER_TITLE } from 'constants/page-titles';

const Register = () => {
  return (
    <PageContainer
      title={REGISTER_TITLE.title}
      subtitle={REGISTER_TITLE.subtitle}
    >
      <RegisterForm />
    </PageContainer>
  );
};

export default Register;
