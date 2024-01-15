import React from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTER_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
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
          />
          <Form.Control
            style={{ marginTop: 10 }}
            placeholder="Введіть Ваш пароль..."
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

            <Button style={{ marginTop: 10 }} variant={"outline-success"}>
              {isLogin ? "Увійти" : "Зареєструйся"}
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
