import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const AdminPage = () => {
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <Button variant="outline-dark" style={{ marginTop: 8 }}>
        Додати тип
      </Button>
      <Button variant="outline-dark" style={{ marginTop: 8 }}>
        Додати бренд
      </Button>
      <Button variant="outline-dark" style={{ marginTop: 8 }}>
        Додати пристрій
      </Button>
      <CreateType show={true} />
      <CreateBrand />
      <CreateDevice />
    </Container>
  );
};

export default AdminPage;
