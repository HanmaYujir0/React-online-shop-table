import React from "react";
import style from "./table.module.css";

function Table(props) {
  return (
    <tr>
      <td className={style.id}>{props.id}</td>
      <td className={style.left}>{props.left}</td>
      <td className={style.name}>{props.name}</td>
      <td className={style.price}>{props.price}</td>
      <td className={style.image}><img src={props.image} alt="" /></td>
    </tr>
  );
}

export default Table;
