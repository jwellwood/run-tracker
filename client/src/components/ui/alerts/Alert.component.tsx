import React from 'react';
import { IAlert } from '../../../common/alert.type';
import { useSelector } from 'react-redux';

const Alert: React.FC = () => {
  // TODO type this properly
  const alerts = useSelector((state: any) => state.alert);

  const condition: boolean = alerts && alerts.length > 0;

  return (
    condition &&
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
