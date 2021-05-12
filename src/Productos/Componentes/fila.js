import React from "react";

export default function fila(props) {
  return (
    <tr key={props.id}>
      <th> {props.id} </th>
      <th>{props.codbarra} </th>
      <th> {props.descripcion} </th>
      <th> {props.marca} </th>
    </tr>
  );
}
