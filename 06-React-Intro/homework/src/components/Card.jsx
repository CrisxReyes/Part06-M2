import React from 'react';

export default function Card(props) {
  // acá va tu código
  const img = props.img;
  const linkimg = `http://openweathermap.org/img/wn/${img}@2x.png`;

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">
             <button onClick={props.onClose}>X</button>
            </th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <th colSpan="3">{props.name}</th>
          </tr>
          <tr>
            <td>Min</td>
            <td>Max</td>
            <td rowSpan="2">
              <img src={linkimg} alt="" />
            </td>
          </tr>
          <tr>
            <td>{props.min}°</td>
            <td>{props.max}°</td>
          </tr>
        </tbody>  
      </table>
    </div>
  ) 

};