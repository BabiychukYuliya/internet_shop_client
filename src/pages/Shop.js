import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <Container>
      <Row style={{ marginTop: 20 }}>
        <Col>
          <TypeBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

export default Shop;
