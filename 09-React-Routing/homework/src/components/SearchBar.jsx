import React, { useState } from 'react';
import s from  './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [entradas, setEntradas] = useState("");

  return (
    <form className= {s.searchbar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(entradas);
    }}>
      <input className= {s.input}
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setEntradas(e.target.value)}
      />
      <input className = {s.agregar} type="submit" value="Agregar" />
    </form>
  )
};