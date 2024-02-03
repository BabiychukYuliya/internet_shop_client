import { Container } from "react-bootstrap";

const Basket = ({ device }) => {
  return (
    <Container style={{ display: "flex", gap: 40 }}>
      <div>Image</div>
      <div>Name</div>
      <div>Quantity</div>
      <div>Price</div>
      <div>Total</div>
      <div>Order total</div>
    </Container>
  );
};

export default Basket;
