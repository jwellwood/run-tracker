import React, { useState, FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/user.action';
import { IRegisterUser } from '../../common/registration.type';
import { Redirect } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../routes';
import { IUser } from '../../common/user.type';

const RegisterForm: FC = () => {
  const { isAuthenticated } = useSelector((state: IUser) => state.user);

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: '',
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
    const data: IRegisterUser = { ...input };
    dispatch(registerUser(data));
  };

  if (isAuthenticated) {
    return <Redirect to={PROFILE_ROUTE} />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='username'
          name='username'
          onChange={onChange}
        />
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

export default RegisterForm;
