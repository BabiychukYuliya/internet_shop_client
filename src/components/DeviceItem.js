import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const DeviceItem = observer(({ device }) => {
  const navigate = useNavigate();

  return (
    <Col md={4} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
      <Card style={{ width: 150, cursor: "pointer", margin: 10 }}>
        <Image
          src={process.env.REACT_APP_API_URL + device.img}
          width={150}
          height={150}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            color: "grey",
          }}
        >
          Sumsung
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>{device.raiting}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
});

export default DeviceItem;
