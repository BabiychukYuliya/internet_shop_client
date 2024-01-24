import { Modal, Button, Form } from "react-bootstrap";

const CreateDevice = ({ show, onHide }) => {
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
          Додати пристрій
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Введіть назву пристрою" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
          Додати пристрій
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
