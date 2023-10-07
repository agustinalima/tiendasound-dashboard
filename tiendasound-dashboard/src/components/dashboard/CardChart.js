import '../css/cards.css'
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function CardChart() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://tienda-sound.onrender.com/productos/api/categoria1'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria2'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria3'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria4'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria5'),
          fetch('https://tienda-sound.onrender.com/productos/api/categoria6')
        ]);

       // Obtener solo el valor de "total" de cada respuesta y almacenarlo en el estado
       const totals = await Promise.all(responses.map(response => response.json()))
       .then(data => data.map(responseData => responseData.total));

       setData(totals);
       setIsLoading(false);
      } catch (error) {
     console.error('Error fetching data:', error);
      }
      };

      fetchData();
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Cantidad de Productos por Categoría</h2>
      <BarChart
        width={600}
        height={400}
        data={data.map((total, index) => ({ name: `Categoria ${index + 1}`, total }))}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="length" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
}




export default CardChart;
