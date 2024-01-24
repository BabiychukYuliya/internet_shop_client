import { Modal, Button, Form } from "react-bootstrap";

const CreateBrand = ({ show, onHide }) => {
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
          <Form.Control placeholder="Введіть назву бренду" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
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
