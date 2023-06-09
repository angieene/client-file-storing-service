import React from 'react';

import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

import Palette from '../../palette';

const Login = () => {
  const handleRegistration = async () => {
    if (process.env.REACT_APP_GOOGLE_AUTH)
      window.location.href = process.env.REACT_APP_GOOGLE_AUTH;
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: '40vh',
        background: Palette.greyDark,
        position: 'absolute',
        top: '50%',
        left: '50%',
        mr: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 4,
        gap: 4,
      }}
    >
      <Typography variant="h4">Sing in/Sing up</Typography>
      <Button variant="outlined" size="large" onClick={handleRegistration}>
        Google auth
      </Button>
      <Typography variant="body2">Need help?</Typography>
    </Container>
  );
};

export default Login;
