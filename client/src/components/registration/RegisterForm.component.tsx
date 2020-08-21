import React, { useState, FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'store/user/user.action';
import { IRegisterUser } from 'common/registration.type';
import { Redirect } from 'react-router-dom';
import { PROFILE_ROUTE, SIGN_IN_ROUTE } from 'constants/routes';
import { IUser } from 'common/user.type';
import { Form, Button } from 'react-bootstrap';
import LinkButton from 'components/ui/buttons/LinkButton';

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
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' name='username' onChange={onChange} />
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' onChange={onChange} />
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' onChange={onChange} />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Form.Text>
          Already got an account?{' '}
          <LinkButton link={SIGN_IN_ROUTE}>Sign in</LinkButton>
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default RegisterForm;
