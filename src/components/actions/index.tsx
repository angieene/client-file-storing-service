import React, { MouseEvent, FC } from 'react';
import { Box, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import { ACTIONS } from '../../utils/constants';
import { StyledSpeedDial } from './style';

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleClick: (e: MouseEvent<HTMLElement>, operation: string) => void;
}

const ActionsList: FC<Props> = ({ open, handleOpen, handleClick }) => {
  return (
    <Box>
      <StyledSpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon />}
        onClick={handleOpen}
        open={open}
      >
        {ACTIONS.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e) => {
              handleClick(e, action.operation);
            }}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
};

export default ActionsList;
