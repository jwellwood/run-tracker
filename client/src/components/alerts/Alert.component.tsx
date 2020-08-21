import React from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';
import { RootState } from 'store';

const CustomAlert: React.FC = () => {
  const { alert } = useSelector((state: RootState) => state);

  return alert && alert.msg ? (
    <Toast
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        color: alert.type === 'success' ? 'green' : 'red',
      }}
      key={alert.id}
    >
      <Toast.Body>{alert.msg}</Toast.Body>
    </Toast>
  ) : null;
};

export default CustomAlert;
