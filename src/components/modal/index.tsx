import React, { FC, ReactNode } from 'react';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { StyledDialog } from './style';

interface Props {
  modalTitle: string;
  isOpen: boolean;
  children: ReactNode;
  handleSave: () => void;
  handleCancel: () => void;
}

const Modal: FC<Props> = ({
  isOpen,
  children,
  modalTitle,
  handleSave,
  handleCancel,
}) => {
  return (
    <StyledDialog keepMounted open={isOpen} maxWidth="xl">
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default Modal;
