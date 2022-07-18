import React, { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../router';
import { useActions } from '../../hooks/useActions';

const Header: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const history = useHistory();
  const { setUser, setIsAuth } = useActions();

  const logOut = () => {
    setUser({
      id: 0,
      email: '',
      password: '',
      role: '',
      basket: [],
    });
    setIsAuth(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to={RouteNames.HOME_ROUTE}>LOGO</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to={RouteNames.HOME_ROUTE}>
              Главная
            </NavLink>
            <NavLink className="nav-link" to={RouteNames.ABOUT_ROUTE}>
              Про Нас
            </NavLink>
            <NavLink className="nav-link" to={RouteNames.SHOP_ROUTE}>
              Продукты
            </NavLink>
          </Nav>

          {isAuth ? (
            <Nav className="ml-auto">
              <NavLink className="nav-link" to={RouteNames.ADMIN_ROUTE}>
                Личный Кабинет
              </NavLink>
              <NavLink onClick={() => logOut()} className="nav-link" to={RouteNames.ADMIN_ROUTE}>
                Выйти
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink className={'nav-link'} to={RouteNames.LOGIN_ROUTE}>
                Авторизaция
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
