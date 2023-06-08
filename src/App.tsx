import Todos from "./components/Todos/Todos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoDetail } from "./components/TodoDetail/TodoDetail";
import { Box } from "@mui/material";
function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path={`${process.env.REACT_APP_DETAIL_URL}/:id`} element={<TodoDetail />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
