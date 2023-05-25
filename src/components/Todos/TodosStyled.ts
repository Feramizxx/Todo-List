import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "90vh",
  maxWidth: "800px",
  alignContent: "center",
  justifyContent: "center",
  justifyItems: "center",
  margin: "0px auto",
});

export const StyledPaper = styled(Paper)({
  height: "60vh",
  borderRadius: "md",
  overflowY: "auto",
  bgcolor: "#D3D3D3",
});
