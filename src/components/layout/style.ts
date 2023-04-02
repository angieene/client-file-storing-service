import { Backdrop } from '@mui/material';
import styled from 'styled-components';
import Palette from '../../palette';

export const StyledWrapper = styled.div`
  display: flex;
  margin: 2rem 5rem;
  gap: 2rem;
  height: 100vh;

  & > * {
    border-radius: 10px;
    background: ${Palette.greyDark};
    flex-direction: column;
  }
`;

export const StyledMain = styled.main`
  height: 100vh;
  flex: 2 60%;
`;

export const StyledList = styled.ul``;

export const StyledMenu = styled.div`
  flex: 1 20%;
  height: 100vh;
  padding: 20px 10px 0 50px;
`;
export const StyledPanel = styled.div`
  flex: 1 20%;
  height: 100vh;
  padding: 20px 50px 0 10px;
`;
