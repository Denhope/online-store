import React, { FC } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { RouteNames } from '../router';
import './Auth.scss';

const AuthPage: FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === RouteNames.LOGIN_ROUTE;
  const history = useHistory();
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
            // value={email}
            onChange={(e) => null}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            // value={password}
            onChange={(e) => null}
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

            <Button onClick={() => null}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
