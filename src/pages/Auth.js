import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTER_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useLocation } from "react-router-dom";
import { login, register } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(location);

  const click = async () => {
    let data;
    if (isLogin) {
      const data = await login(email, password);
    } else {
      const data = await register(email, password);
    }
    user.setUser(user);
    user.setIsAuth(true);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight - 54, // height = height of browser - height of navbar
      }}
    >
      <Card style={{ width: 500, padding: 30 }}>
        <h2 style={{ margin: "auto" }}>
          {" "}
          {isLogin ? "Aвторизація" : "Реєстрація"}
        </h2>
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Form.Control
            style={{ marginTop: 10 }}
            placeholder="Введіть Ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            style={{ marginTop: 10 }}
            placeholder="Введіть Ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            {isLogin ? (
              <div>
                Немає акаунта?
                <NavLink to={REGISTER_ROUTE}>Зареєструйся!</NavLink>
              </div>
            ) : (
              <div>
                Є акаунт?
                <NavLink to={LOGIN_ROUTE}>Заходь!</NavLink>
              </div>
            )}

            <Button
              onClick={click}
              style={{ marginTop: 10 }}
              variant={"outline-success"}
            >
              {isLogin ? "Увійти" : "Зареєструйся"}
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
