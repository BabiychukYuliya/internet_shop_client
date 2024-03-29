import { useContext, useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);
  const [info, setInfo] = useState([]); //масив характеристик для пристрою

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...info, [key]: value } : i))
    );
  };
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    // console.log(info);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати пристрій
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>
              {device.selectedType.name || "Оберіть тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => device.setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle style={{ marginTop: 10 }}>
              {device.selectedBrand.name || "Оберіть бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => device.setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Введіть назву пристрою"
            style={{ marginTop: 10 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            placeholder="Введіть вартість пристрою"
            type="number"
            style={{ marginTop: 10 }}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Form.Control
            type="file"
            onChange={selectFile}
            style={{ marginTop: 10 }}
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Додати нову властивість
          </Button>
          {info.map((i) => (
            <Row key={i.number} style={{ marginTop: 10 }}>
              <Col>
                <Form.Control
                  placeholder="Введіть назву властивості"
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  value={i.title}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Введіть опис властивості"
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  value={i.description}
                />
              </Col>
              <Col>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Видалити властивість
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-success" onClick={addDevice}>
          Додати пристрій
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;

// import React, { useContext, useEffect, useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
// import { Context } from "../../index";
// import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
// import { observer } from "mobx-react-lite";

// const CreateDevice = observer(({ show, onHide }) => {
//   const { device } = useContext(Context);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [file, setFile] = useState(null);
//   const [info, setInfo] = useState([]);

//   useEffect(() => {
//     fetchTypes().then((data) => device.setTypes(data));
//     fetchBrands().then((data) => device.setBrands(data));
//   }, []);

//   const addInfo = () => {
//     setInfo([...info, { title: "", description: "", number: Date.now() }]);
//   };
//   const removeInfo = (number) => {
//     setInfo(info.filter((i) => i.number !== number));
//   };
//   const changeInfo = (key, value, number) => {
//     setInfo(
//       info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
//     );
//   };

//   const selectFile = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const addDevice = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("price", `${price}`);
//     formData.append("img", file);
//     formData.append("brandId", device.selectedBrand.id);
//     formData.append("typeId", device.selectedType.id);
//     formData.append("info", JSON.stringify(info));
//     createDevice(formData).then((data) => onHide());
//   };

//   return (
//     <Modal show={show} onHide={onHide} centered>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Добавить устройство
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Dropdown className="mt-2 mb-2">
//             <Dropdown.Toggle>
//               {device.selectedType.name || "Выберите тип"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               {device.types.map((type) => (
//                 <Dropdown.Item
//                   onClick={() => device.setSelectedType(type)}
//                   key={type.id}
//                 >
//                   {type.name}
//                 </Dropdown.Item>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown className="mt-2 mb-2">
//             <Dropdown.Toggle>
//               {device.selectedBrand.name || "Выберите тип"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               {device.brands.map((brand) => (
//                 <Dropdown.Item
//                   onClick={() => device.setSelectedBrand(brand)}
//                   key={brand.id}
//                 >
//                   {brand.name}
//                 </Dropdown.Item>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//           <Form.Control
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-3"
//             placeholder="Введите название устройства"
//           />
//           <Form.Control
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}
//             className="mt-3"
//             placeholder="Введите стоимость устройства"
//             type="number"
//           />
//           <Form.Control className="mt-3" type="file" onChange={selectFile} />
//           <hr />
//           <Button variant={"outline-dark"} onClick={addInfo}>
//             Добавить новое свойство
//           </Button>
//           {info.map((i) => (
//             <Row className="mt-4" key={i.number}>
//               <Col md={4}>
//                 <Form.Control
//                   value={i.title}
//                   onChange={(e) =>
//                     changeInfo("title", e.target.value, i.number)
//                   }
//                   placeholder="Введите название свойства"
//                 />
//               </Col>
//               <Col md={4}>
//                 <Form.Control
//                   value={i.description}
//                   onChange={(e) =>
//                     changeInfo("description", e.target.value, i.number)
//                   }
//                   placeholder="Введите описание свойства"
//                 />
//               </Col>
//               <Col md={4}>
//                 <Button
//                   onClick={() => removeInfo(i.number)}
//                   variant={"outline-danger"}
//                 >
//                   Удалить
//                 </Button>
//               </Col>
//             </Row>
//           ))}
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="outline-danger" onClick={onHide}>
//           Закрыть
//         </Button>
//         <Button variant="outline-success" onClick={addDevice}>
//           Добавить
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// });

// export default CreateDevice;
