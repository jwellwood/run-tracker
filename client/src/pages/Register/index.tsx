import React from 'react';
import RegisterForm from 'components/registration/RegisterForm.component';

const Register = () => {
  return (
    <div>
      <div>
        <p>@Non-auth</p>
        <p>A form to allow registration to the DB</p>
        <div>
          Links:
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
