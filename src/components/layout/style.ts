import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 2rem 5rem;
  height: 100vh;
`;

export const StyledHeader = styled.header`
  height: 80px;
`;

export const StyledMain = styled.main`
  height: 100vh;
`;

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

export const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledIconButton = styled(IconButton).attrs({
  sx: { color: 'white', background: 'grey' },
})``;
