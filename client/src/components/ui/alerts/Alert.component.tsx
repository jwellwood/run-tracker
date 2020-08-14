import React from 'react';
import { IAlert } from 'common/alert.type';
import { useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';

const CustomAlert: React.FC = () => {
  // TODO type this properly
  const alerts = useSelector((state: any) => state.alert);

  const condition: boolean = alerts && alerts.length > 0;

  return (
    condition &&
    alerts.map((alert: IAlert) => {
      const { msg, type } = alert;
      return (
        <Toast
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: type === 'success' ? 'green' : 'red',
          }}
          key={alert.id}
        >
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      );
    })
  );
};

export default CustomAlert;
