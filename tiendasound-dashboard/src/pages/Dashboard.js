import '../components/css/cards.css'

import CardTotalProductos from '../components/dashboard/CardTotalProductos';
import CardTotalUsuarios from '../components/dashboard/CardTotalUsuarios';
import CardTotalCategorias from '../components/dashboard/CardTotalCategorias';
import CardUltimoUsuario from '../components/dashboard/CardUltimoUsuario';
import CardUltimoProducto from '../components/dashboard/CardUltimoProducto';
import CardChart from '../components/dashboard/CardChart';
import CardTotalProductosNuevos from '../components/dashboard/CardTotalProductosNuevos';
import CardTotalProductosUsados from '../components/dashboard/CardTotalProductosUsados';
import CardTotalEnvioGratis from '../components/dashboard/CardTotalEnvioGratis';
import CardTotalEnvioPago from '../components/dashboard/CardTotalEnvioPago';


function Dashboard(){
    return(
        <div>
            <div className='page-title'>
                <span className='tiendasound-tag'>Tienda Sound</span>
                <h1>Dashboard</h1>
            </div>

            <section className='allCards'>
                <CardTotalProductos />
                <CardTotalUsuarios />
                <CardTotalCategorias />
                <CardUltimoUsuario />
                <CardChart />
                <CardUltimoProducto />
                <CardTotalProductosNuevos />
                <CardTotalProductosUsados />
                <CardTotalEnvioGratis />
                <CardTotalEnvioPago />
            </section>
        </div>
    );
}


export default Dashboard;