import { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]); //масив характеристик для пристрою

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
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
          Додати пристрій
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Оберіть тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle style={{ marginTop: 10 }}>
              Оберіть бренд
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Введіть назву пристрою"
            style={{ marginTop: 10 }}
          />
          <Form.Control
            placeholder="Введіть вартість пристрою"
            type="number"
            style={{ marginTop: 10 }}
          />
          <Form.Control type="file" style={{ marginTop: 10 }} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Додати нову властивість
          </Button>
          {info.map((i) => (
            <Row key={i.number} style={{ marginTop: 10 }}>
              <Col>
                <Form.Control placeholder="Введіть назву властивості" />
              </Col>
              <Col>
                <Form.Control placeholder="Введіть опис властивості" />
              </Col>
              <Col>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Видалити властивість
                </Button>
              </Col>
            </Row>
          ))}
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
