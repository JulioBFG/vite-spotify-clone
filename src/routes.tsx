import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} caseSensitive={true} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
