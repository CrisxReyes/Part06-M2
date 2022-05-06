import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  const img = props.img;
  const linkimg = `http://openweathermap.org/img/wn/${img}@2x.png`;

  return(
    <div className={s.contorno}>
      <table className= {s.tabla}>
        <thead>
          <tr>
            <th colSpan="3">
             <button className= {s.boton} onClick={props.onClose}>✕</button>
            </th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <Link to={`/ciudad/${props.id}`}>
              <th className= {s.ciudad} colSpan="3">{props.name}</th>
            </Link>
          </tr>
          <tr>
            <td>Min</td>
            <td>Max</td>
            <td rowSpan="2">
              <img src={linkimg} alt="" />
            </td>
          </tr>
          <tr>
            <td>{Math.floor(props.min)}°</td>
            <td>{Math.floor(props.max)}°</td>
          </tr>
        </tbody>  
      </table>
    </div>
  ) 
};