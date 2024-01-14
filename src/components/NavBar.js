import { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Web shop
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ marginLeft: "auto", color: "white" }}>
            <Button variant="outline-light">Admin panel</Button>
            <Button variant="outline-light" style={{ marginLeft: 15 }}>
              Enter
            </Button>
          </Nav>
        ) : (
          <Nav style={{ marginLeft: "auto", color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
