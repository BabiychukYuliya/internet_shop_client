import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    createBrand({ name: value }).then((data) => setValue(""));
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введіть назву бренду"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addBrand}>
          Додати бренд
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
