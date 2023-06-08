import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Todos from './components/Todos';
import { TodoDetail } from './components/TodoDetail';

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route
            path={`${process.env.REACT_APP_DETAIL_URL}/:id`}
            element={<TodoDetail />}
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
