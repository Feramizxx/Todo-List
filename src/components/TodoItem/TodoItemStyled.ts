import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
export const StyledLink = styled(Link)({
  listStyle: "none",
  textDecoration: "none",
  color: "black",
  letterSpacing: "0.3px",
});
export const StyledListItem = styled(ListItem)({
  cursor: "pointer",
  padding: "12px 8px",
  fontSize: "1.2rem",
});
