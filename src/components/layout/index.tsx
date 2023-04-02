import React, { FC, PropsWithChildren } from 'react';
import { Stack, Typography } from '@mui/material';

import LogoIcon from '../icons/header/LogoIcon';
import { StyledWrapper, StyledMain, StyledMenu, StyledPanel } from './style';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const list = ['Dashboard', 'My Files', 'Shared'];
  return (
    <StyledWrapper>
      <StyledMenu>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: 'flex', alignItems: 'center', mb: 3 }}
        >
          <LogoIcon fill={'#000000'} size={40} />
          <Typography variant="h6" sx={{ fontWeight: '700' }}>
            File Service
          </Typography>
        </Stack>
        <Stack spacing={2}>
          {list.map((el) => (
            <Typography variant="body1">{el}</Typography>
          ))}
        </Stack>
      </StyledMenu>
      <StyledMain> {children}</StyledMain>
      <StyledPanel>sdfsd</StyledPanel>
    </StyledWrapper>
  );
};

export default Layout;
