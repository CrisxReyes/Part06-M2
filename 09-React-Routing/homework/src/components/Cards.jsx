import React from 'react';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className= {s.tarjetas}>
      {props.cities.map((ciudad) => (
        <Card max={ciudad.max}
          min={ciudad.min}
          name={ciudad.name}
          img={ciudad.img}
          id={ciudad.id}
          onClose={() => props.onClose(ciudad.id)} />
      ))}
    </div>
  ) 
};