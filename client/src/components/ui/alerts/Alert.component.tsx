import React from 'react';
import { IAlert } from '../../../common/alert.type';
import { useSelector } from 'react-redux';

const Alert: React.FC = () => {
  const alerts = useSelector((state: any) => state.alert);

  return (
    alerts &&
    alerts.length > 0 &&
    alerts.map((alert: IAlert) => {
      const { msg, type } = alert;
      return (
        <div key={alert.id}>
          <p style={{ color: type === 'success' ? 'green' : 'red' }}>{msg}</p>
        </div>
      );
    })
  );
};

export default Alert;
