import '../css/cards.css'
import React, { useEffect, useState } from 'react';


function CardTotalEnvioPago(){

    const [total, setTotal] = useState(0);

    useEffect(() => {

    // Realizar la solicitud a la API para obtener la lista de todos los productos
    fetch('https://tienda-sound.onrender.com/productos/api/enviopago')
      .then((response) => response.json())
      .then((resultado) => {
        // Obten el número total de productos
        const totalProductos = resultado.total;
        setTotal(totalProductos);
      })
      .catch((error) => console.error(error));
  }, []);


    return(
        <div className='card'>

            <div className='icono'>
              <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696705188/dashboard/cglbfxqvaimmsqmix4nf.png" alt=""></img>
            </div>

            <div className='data'>
            <p>Envio <strong>PAGO</strong></p>
              <h2>{total}</h2>
            </div>

        </div>
    );
}

export default CardTotalEnvioPago;