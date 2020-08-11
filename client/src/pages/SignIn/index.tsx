import React from 'react';
import SignInForm from 'components/registration/SignInForm.component';

const SignIn = () => {
  return (
    <div>
      <div>
        <p>@Non-auth</p>
        <p>A form to retrieve validate credentials and allow access to site</p>
        <div>
          Links:
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Register</li>
            <li>Forgot password</li>
          </ul>
        </div>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
