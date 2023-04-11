import React, { FC, MouseEvent } from 'react';

import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';

import ActionsList from '../actions';
import Breadcrumbs from '../breadcrumbs';
import Logo from '../logo';
import { StyledHeader, StyledStack, StyledTextField } from './style';

interface HeaderProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleClick: (e: MouseEvent<HTMLElement>, operation: string) => void;
}

const Header: FC<HeaderProps> = ({
  open,
  handleOpen,
  handleClose,
  handleClick,
}) => {
  return (
    <StyledHeader>
      <StyledStack>
        <Logo />
        <StyledTextField
          InputProps={{
            sx: { background: 'white', minWidth: '400px' },
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <ActionsList
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      </StyledStack>
      <Breadcrumbs />
    </StyledHeader>
  );
};

export default Header;
