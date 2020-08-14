import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from 'store/actions/profile.action';
import { IProfile } from 'common/profile.type';
import { Form, Button } from 'react-bootstrap';

const CreateUpdateProfileForm = () => {
  // TODO set initial values if profile already exists
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    location: '',
    hasDarkTheme: false,
    hasMetric: true,
  });

  const onChange = (e: ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    setInput({
      ...input,
      [element.name]: element.value,
    });
  };
  console.log({ ...input });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IProfile = { ...input };
    dispatch(createProfile(data));
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
        <Form.Control
          as='select'
          custom
          name='hasDarkTheme'
          onChange={onChange}
        >
          <option value='true'>Dark</option>
          <option value='false'>Light</option>
        </Form.Control>
        <Form.Label>Units</Form.Label>
        <Form.Control as='select' custom name='hasMetric' onChange={onChange}>
          <option value='true'>Metric</option>
          <option value='false'>Imperial</option>
        </Form.Control>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CreateUpdateProfileForm;
