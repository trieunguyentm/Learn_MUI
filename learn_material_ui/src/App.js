import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Progress from './component/Progress';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/progress' element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
