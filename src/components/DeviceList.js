import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Col } from "react-bootstrap";
import DeviceItem from "../components/DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Col style={{ display: "flex" }}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Col>
  );
});

export default DeviceList;
