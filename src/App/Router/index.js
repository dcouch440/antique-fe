import { Route, Routes } from 'react-router';

import { Home } from 'pages';
import React from 'react';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
