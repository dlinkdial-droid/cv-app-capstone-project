import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import InnerPage from './pages/Inner/InnerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inner" element={<InnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;