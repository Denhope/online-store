import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/navbar/Navbar';

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
