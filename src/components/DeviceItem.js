import { Col, Card, Image } from "react-bootstrap";

const DeviceItem = ({ device }) => {
  return (
    <Col>
      <Card style={{ width: 150, cursor: "pointer", margin: 10 }}>
        <Image src={device.img} width={150} height={150} />
        <div>
          Sumsung...
          <div>
            <div>{device.raiting}</div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
