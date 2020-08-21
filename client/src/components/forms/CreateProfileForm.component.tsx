import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from 'store/profile/profile.action';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CreateProfileForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initProfileFormState = {
    location: '',
    darkTheme: false,
    metricUnits: true,
    activity: [],
  };
  const [input, setInput] = useState({
    ...initProfileFormState,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.checked,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...input };
    dispatch(createProfile(data, history));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type='text'
          name='location'
          placeholder='location'
          onChange={onChange}
        />
        <Form.Label>Theme</Form.Label>
        <Form.Check
          id='darkTheme'
          type='switch'
          name='darkTheme'
          checked={input.darkTheme}
          label={input.darkTheme ? 'Dark' : 'Light'}
          onChange={onCheck}
        />
        <Form.Label>Units</Form.Label>
        <Form.Check
          id='metricUnits'
          type='switch'
          name='metricUnits'
          label={input.metricUnits ? 'Metric' : 'Imperial'}
          checked={input.metricUnits}
          onChange={onCheck}
        />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CreateProfileForm;
