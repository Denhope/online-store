import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/navbar/Navbar';
import AuthService from './services/AuthSerrvices';
import { useActions } from './hooks/useActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
  const { setIsAuth } = useActions();
  useEffect(() => {
    AuthService.check().then((data) => {
      setIsAuth(true);
    });
  }, []);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
