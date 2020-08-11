import React, { useState, FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from 'store/actions/user.action';
import { ISignInUser } from 'common/registration.type';
import { Redirect } from 'react-router-dom';
import { PROFILE_ROUTE } from 'constants/routes';
import { IUser } from 'common/user.type';

const SignInForm: FC = () => {
  const { isAuthenticated } = useSelector((state: IUser) => state.user);

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const onChange = (e: ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    setInput({
      ...input,
      [element.name]: element.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: ISignInUser = { ...input };
    dispatch(signInUser(data));
  };

  if (isAuthenticated) {
    return <Redirect to={PROFILE_ROUTE} />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={onChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignInForm;
