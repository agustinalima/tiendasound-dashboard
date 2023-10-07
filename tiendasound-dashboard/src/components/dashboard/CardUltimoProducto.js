import '../css/cards.css';
import React, { useEffect, useState } from 'react';

function CardUltimoProducto() {
  const [productoConMayorId, setProductoConMayorId] = useState(null);

  useEffect(() => {
    fetch('https://tienda-sound.onrender.com/productos/api/todoslosproductos')
      .then((response) => response.json())
      .then((resultado) => {
        if (resultado && resultado.data){
          
        const idsProductos = resultado.data.map(producto => producto.id);
        const idMayor = Math.max(...idsProductos);
        const productoConMayorId = resultado.data.find(producto => producto.id === idMayor);
        setProductoConMayorId(productoConMayorId);
      }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='cards'>
      <p>Último producto agregado</p>
      {productoConMayorId ? (
        <div>
          <img src={`https://res.cloudinary.com/dlf8flk1o/image/upload/v1696102067/productos/${productoConMayorId.imagen}`} alt="" />
          <p>{productoConMayorId.estado}</p>
          <p>{productoConMayorId.nombreProducto}</p>

          {productoConMayorId.envio === 0 ? (
          <p>Envío gratis</p>) :
          (<p>Envio {productoConMayorId.envio}</p>
        )}
          <p>{productoConMayorId.precioProducto}</p>
          
        </div>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}

export default CardUltimoProducto;
