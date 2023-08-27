import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Progress from './component/ProgressMUI';
import SkeletonMUI from './component/SkeletonMUI';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/progress' element={<Progress />} />
        <Route path='/skeleton' element={<SkeletonMUI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
