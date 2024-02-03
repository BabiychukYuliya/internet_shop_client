import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import { BASKET_ROUTE } from "../utils/consts";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <div style={{ display: "flex" }}>
        <Col md={4}>
          <Image
            src={process.env.REACT_APP_API_URL + device.img}
            width={200}
            height={250}
          />
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
            <Button
              variant="outline-dark"
              onClick={() => navigate(BASKET_ROUTE)}
            >
              Add to basket
            </Button>
          </Card>
        </Col>
      </div>
      <Row style={{ display: "flex", marginTop: 60 }}>
        <h2>Characteristics:</h2>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
