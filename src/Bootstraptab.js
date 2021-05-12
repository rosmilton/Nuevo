import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Fila from "./Productos/Componentes/fila";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import "./Bootstraptab.css";
import Add from "./Productos/Add";
import Del from "./Productos/Del";
import Edit from "./Productos/Edit";
import Modal from "react-bootstrap/Modal";
import Archivossvg from "./Productos/Componentes/Archivossvg";

const Bootstraptab = () => {
  const [productos, setproductos] = useState([]);
  const [columnas] = useState([
    {
      dataField: "id",
      text: "id",
    },
    {
      dataField: "codbarra",
      text: "Cod.Barra",
    },
    {
      dataField: "descripcion",
      text: "Descripcion",
    },
    {
      dataField: "marca",
      text: "Marca",
    },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost/php/all-productos.php"
      );
      setproductos(data.productos);
    })();
  }, []);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const [crear, setcrear] = useState(false);
  const handleCrear = () => setcrear(true);
  const handlecrearClose = () => setcrear(false);

  const [del, setdel] = useState(false);
  const handledel = () => setdel(true);
  const handledelClose1 = () => setdel(false);

  const [edit, setedit] = useState(false);
  const handleedit = () => setedit(true);
  const handleeditClose2 = () => setedit(false);

  return (
    <>
      <div className="container">
        <div className="hdr row">
          <div className="col-sm-12 btn btn-success">Productos</div>
        </div>
        <div className="container" style={{ marginTop: 50 }}>
          <div className="botones">

            <Button variant="success" onClick={handleCrear}>
              <Archivossvg imagen="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </Button>{" "}
            {/* ////////////////////Modal Add */}
            <Modal show={crear} onHide={handlecrearClose} centered>
              <Add />
            </Modal>
            {/* ////////////////////Modal Add */}
            <Button variant="danger" onClick={handledel}>
              <Archivossvg imagen="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </Button>{" "}
            {/* ////////////////////Modal delete */}
            <Modal show={del} onHide={handledelClose1}>
              <Del />
            </Modal>
            {/* ////////////////////Modal delete */}
            <Button variant="primary" onClick={handleedit}>
              <Archivossvg imagen="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </Button>{" "}
            {/* ////////////////////Editar  */}
            <Modal show={edit} onHide={handleeditClose2}>
              <Edit />
            </Modal>
            {/* ////////////////////Editar  */}
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                {columnas.map((col) => {
                  return <th> {col.text} </th>;
                })}
              </tr>
            </thead>
            <tbody>
              {productos.map((pro) => {
                return (
                  <Fila
                    id={pro.id}
                    descripcion={pro.descripcion}
                    marca={pro.marca}
                    codbarra={pro.codbarra}
                  />
                );
              })}
            </tbody>
          </Table>
          {/* <div>{paginationBasic}</div> */}
        </div>
      </div>
    </>
  );
};

export default Bootstraptab;
