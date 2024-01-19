import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import DeviceItem from "../components/DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row style={{ display: "flex" }}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
