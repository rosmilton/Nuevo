import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function Bootstraptab() {
  const [products, setProducts] = useState([]);
  const [columns, setcolumns] = useState([
    {
      dataField: "codbarra",
      text: "Cod.Barra",
    },
    {
      dataField: "articulo",
      text: "Articulo",
      // filter: textFilter(),
    },
    {
      dataField: "descripcion",
      text: "Descripcion",
      // sort: true,
    },
    {
      dataField: "marca",
      text: "Marca",
      // sort: true,
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost/php/all-productos.php").then((response) => {
      console.log("Todo ", response.data);
      setProducts(response.data);
    });
  }, []);

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
        // value: this.state.products.length,
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
        <BootstrapTable
          striped
          hover
        //   keyField="id"
          data={products}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(options)}
        />
      </div>
    </div>
  );
}
