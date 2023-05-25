import { CircularProgress } from "@mui/material";
import { StyledLoadingBox } from "./StyledLoading";

export const LoadingComponent = () => {
  return (
    <StyledLoadingBox>
      <CircularProgress />
    </StyledLoadingBox>
  );
};
