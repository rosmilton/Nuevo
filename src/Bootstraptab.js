import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import filterFactory from "react-bootstrap-table2-filter";
import Table from "react-bootstrap/Table";

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
      dataField: "articulo",
      text: "Articulo" ,
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

  useEffect(async () => {
    const { data } = await axios.get("http://localhost/php/all-productos.php");
    setproductos(data.productos);
  });

  // Corregir este objeto
  const options = {
    page: 2,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: productos.length,
      },
    ],
    sizePerPage: 5,
    pageStartIndex: 0,
    paginationSize: 3,
    prePage: "Prev",
    nextPage: "Next",
    firstPage: "First",
    lastPage: "Last",
    paginationPosition: "top",
  };

  return (
    <div className="container">
      <div className="hdr row">
        <div className="col-sm-12 btn btn-info">Productos</div>
      </div>
      <div className="container" style={{ marginTop: 50 }}>
        {console.log("Todo ", productos)}
        <BootstrapTable
          striped
          hover
          keyField="id"
          data={productos}
          columns={columnas}
          filter={filterFactory()}
        />

        <Table striped bordered hover>
          <thead>
            <tr>
              {columnas.map((col) => (console.log(col), <th> col </th>))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Bootstraptab;
