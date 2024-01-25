import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const AdminPage = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <Button
        variant="outline-dark"
        style={{ marginTop: 8 }}
        onClick={() => setTypeVisible(true)}
      >
        Додати тип
      </Button>
      <Button
        variant="outline-dark"
        style={{ marginTop: 8 }}
        onClick={() => setBrandVisible(true)}
      >
        Додати бренд
      </Button>
      <Button
        variant="outline-dark"
        style={{ marginTop: 8 }}
        onClick={() => setDeviceVisible(true)}
      >
        Додати пристрій
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default AdminPage;
