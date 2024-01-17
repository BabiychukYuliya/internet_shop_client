import { observer } from "mobx-react-lite";
import { Col, Card } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Col style={{ display: "flex" }}>
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          style={{ margin: 10 }}
          onClick={() => device.setSelectedBrand(brand)}
          background-color={
            brand.id === device.selectedBrand.id ? "#0d6efd" : "light"
          }
        >
          {brand.name}
        </Card>
      ))}
    </Col>
  );
});

export default BrandBar;
