import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = {
    id: 8,
    name: "QE55Q60CAUX",
    price: "34999",
    raiting: 4,
    img: "https://content2.rozetka.com.ua/goods/images/big/364929635.jpg",
  };
  const description = [];
  return (
    <Container className="mt-3" style={{ display: "flex" }}>
      <Col md={4}>
        <Image src={device.img} width={200} height={250} />
      </Col>
      <Col md={4}>
        <Row className="d-flex flex-column align-items-center">
          <h2>{device.name}</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `url(${bigStar}) no-repeat center center`,
              width: 140,
              height: 140,
              backgroundSize: "cover",
              fontSize: 64,
            }}
          >
            {device.raiting}
          </div>
        </Row>
      </Col>
      <Col md={4}>
        <Card
          className="d-flex flex-column align-items-center justify-content-around"
          style={{
            width: 250,
            height: 250,
            fontSize: 32,
            border: "5px solid lightgray",
          }}
        >
          <h5>From: {device.price}</h5>
          <Button variant="outline-dark">Add to busket</Button>
        </Card>
      </Col>
    </Container>
  );
};

export default DevicePage;
