import React, { useEffect, useState } from 'react';

function ListadoCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

  fetch('https://tienda-sound.onrender.com/productos/api/todaslascategorias')
    .then((response) => response.json())
    .then((resultado) => {

      const dataCategoria = resultado.data;
      setCategorias(dataCategoria);

    })
    .catch((error) => console.error(error));
}, []);
  

  return (
    <div>
      <h2>Categorias</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoCategorias;
