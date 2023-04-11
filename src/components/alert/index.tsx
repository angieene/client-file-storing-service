import React, { FC } from 'react';

import { Alert as MuiAlert, AlertColor } from '@mui/material';

interface AlertProps {
  title: string;
  severity: AlertColor;
}

const Alert: FC<AlertProps> = ({ title, severity }) => {
  return <MuiAlert severity={severity}>{title}</MuiAlert>;
};

export default Alert;
