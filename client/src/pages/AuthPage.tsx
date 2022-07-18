import React, { FC, useState } from 'react';
import { Button, Card, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { RouteNames } from '../router';
import './Auth.scss';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
// import { login, registration } from '../http/UserApi';

const AuthPage: FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === RouteNames.LOGIN_ROUTE;
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoading } = useTypedSelector((state) => state.auth);
  const { login, registration, logout } = useActions();

  if (isLoading) {
    return <Spinner animation={'border'}></Spinner>;
  }

  const handleClick = async () => {
    try {
      if (isLogin) {
        login(email, password);
      } else {
        registration(email, password);
      }
    } catch (e) {
      alert(e.response.data.message);
      history.push(RouteNames.LOGIN_ROUTE);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto ">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column gap-3">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="form__control">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={RouteNames.REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={RouteNames.LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}

            <Button onClick={handleClick}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
