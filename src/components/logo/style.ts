import { Typography, Stack } from '@mui/material';
import styled from 'styled-components';

export const StyledTypography = styled(Typography).attrs({
  variant: 'h6',
  sx: { fontWeight: '700' },
})``;

export const StyledStack = styled(Stack).attrs({
  direction: 'row',
  spacing: 2,
  sx: {
    display: 'flex',
    alignItems: 'center',
    mb: 3,
    position: 'absolute',
  },
})``;
