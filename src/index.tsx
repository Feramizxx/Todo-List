import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { todosApi } from "./store/TodosApi";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme: any = createTheme({
  palette: {
    background: {
      default: "#81c784",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider theme={theme}>
    <ApiProvider api={todosApi}>
      <App />
    </ApiProvider>
  </ThemeProvider>
);
