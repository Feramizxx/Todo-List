import React from 'react';
import { CircularProgress } from '@mui/material';
import { StyledLoadingBox } from './StyledLoading';

export const LoadingComponent = () => (
  <StyledLoadingBox data-testid="loading-test-id">
    <CircularProgress data-testid="circular-test-id" />
  </StyledLoadingBox>
);
