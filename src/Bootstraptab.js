import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

export class Bootstraptab extends Component {
  state = {
    productos: [
      {
        id: 1,
        codbarra: "as123adcs",
        articulo: "lp123",
        descripcion: "Primer producto",
        marca: 1,
        existe: 1,
      }],
    columnas: [
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
    ],
  };

  // componentDidMount() {
  
  //   axios.get("http://localhost/php/all-productos.php")
  //   .then((response) => {
  //     console.log("Todo ",response.data);      
  //     this.setState(state => ({...state, productos: response.data}))
  //   });
  // }

  render() {
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
          value: this.state.productos.length,
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
          <div className="col-sm-12 btn btn-info">
            Productos
          </div>
        </div>
        <div className="container" style={{ marginTop: 50 }}>
        {console.log("Todo ",this.state.productos) }
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.productos}
            columns={this.state.columnas}
            filter={filterFactory()}
            pagination={paginationFactory(options)}
          />
        </div>
      </div>
    );
  }
}

export default Bootstraptab;
