import { Container, Image, Col } from "react-bootstrap";
import { Context } from "..";
// import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { useContext } from "react";

const Basket = () => {
  const { device } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Container style={{ display: "flex", gap: 40 }}>
      <Col onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
        <Image
          src={process.env.REACT_APP_API_URL + device.img}
          width={150}
          height={150}
        />
      </Col>
      <div>Quantity</div>
      <div>Price</div>
      <div>Total</div>
      <div>Order total</div>
    </Container>
  );
};

export default Basket;
