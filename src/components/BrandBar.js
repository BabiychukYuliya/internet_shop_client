import { observer } from "mobx-react-lite";
import { Col, Card } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Col style={{ display: "flex", flexWrap: "wrap" }}>
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          style={{ margin: 10, padding: 7, cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          bg={brand.id === device.selectedBrand.id ? "primary" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Col>
  );
});

export default BrandBar;
