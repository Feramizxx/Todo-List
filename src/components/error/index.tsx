import React from 'react';
import { StyledErorrBox, StyledSpanBox } from './StyledEroor';

export const Error = () => (
  <StyledErorrBox>
    <StyledSpanBox data-testid="errorText" component="span">
      404 not found!!, The request URL was not found!
    </StyledSpanBox>
  </StyledErorrBox>
);
