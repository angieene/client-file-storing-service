import React, { FC } from 'react';

import LogoIcon from '../icons/LogoIcon';
import { StyledStack, StyledTypography } from './style';

const Logo: FC = () => {
  return (
    <StyledStack>
      <LogoIcon fill={'#000000'} size={40} />
      <StyledTypography>File Service</StyledTypography>
    </StyledStack>
  );
};

export default Logo;
