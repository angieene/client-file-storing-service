import React, { FC, MouseEvent } from 'react';
import { Breadcrumbs, InputAdornment, Link, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

import ActionsList from '../actions';
import { StyledHeader, StyledStack, StyledTextField } from './style';
import Logo from '../logo';

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
      <Breadcrumbs maxItems={2} color="inherit">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </StyledHeader>
  );
};

export default Header;
