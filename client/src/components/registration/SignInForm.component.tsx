import React, { useState, FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from 'store/user/user.action';
import { ISignInUser } from 'common/registration.type';
import { Redirect } from 'react-router-dom';
import {
  PROFILE_ROUTE,
  RESET_PASSWORD_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';
import { IUser } from 'common/user.type';
import { Form, Button } from 'react-bootstrap';
import LinkButton from 'components/ui/buttons/LinkButton';

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
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' onChange={onChange} />
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' onChange={onChange} />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Form.Text>
          Don't have an account?{' '}
          <LinkButton link={REGISTER_ROUTE}>Register</LinkButton>
        </Form.Text>
        <Form.Text>
          Forgot your password?{' '}
          <LinkButton link={RESET_PASSWORD_ROUTE}>Reset Password</LinkButton>
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default SignInForm;
