import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import filterFactory from "react-bootstrap-table2-filter";

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
      text: "Articulo",
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
    setproductos(data.productos)
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
      </div>
    </div>
  );
};

export default Bootstraptab;
