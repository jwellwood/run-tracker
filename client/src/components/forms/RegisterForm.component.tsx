import React, { useState, FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/user.action';
import { IRegisterUser } from '../../common/registration.type';
import { useHistory } from 'react-router-dom';

const RegisterForm: FC = () => {
  const history = useHistory();
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
    history.push('/');
  };

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
