import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getUserProfile } from 'store/profile/profile.action';
import { Form, Button } from 'react-bootstrap';
import { RootState } from 'store';
import { useHistory } from 'react-router-dom';
import CustomSpinner from 'components/ui/spinners/Spinner.component';

const UpdateProfileForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { profile, loading } = useSelector((state: RootState) => state.profile);
  const [input, setInput] = useState({
    location: profile.location,
    metricUnits: profile.metricUnits,
    darkTheme: profile.darkTheme,
  });

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  useEffect(() => {
    setInput({
      location: profile.location,
      metricUnits: profile.metricUnits,
      darkTheme: profile.darkTheme,
    });
  }, [profile]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...input };
    dispatch(createProfile(data, history));
  };

  return loading ? (
    <CustomSpinner />
  ) : (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type='text'
          name='location'
          defaultValue={input.location}
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
          Update
        </Button>
      </Form.Group>
    </Form>
  );
};

export default UpdateProfileForm;
