import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from '../../store/actions/profile.action';
import { IProfile } from '../../common/profile.type';

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
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='location'
        placeholder='location'
        onChange={onChange}
      />
      <select name='hasDarkTheme' onChange={onChange}>
        <option value='true'>Dark</option>
        <option value='false'>Light</option>
      </select>
      <select name='hasMetric' onChange={onChange}>
        <option value='true'>Metric</option>
        <option value='false'>Imperial</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default CreateUpdateProfileForm;
