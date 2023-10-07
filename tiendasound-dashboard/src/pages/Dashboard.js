import CardTotalProductos from '../components/dashboard/CardTotalProductos';
import CardTotalUsuarios from '../components/dashboard/CardTotalUsuarios';
import CardTotalCategorias from '../components/dashboard/CardTotalCategorias';
import CardUltimoUsuario from '../components/dashboard/CardUltimoUsuario';
import CardUltimoProducto from '../components/dashboard/CardUltimoProducto';
import CardChart from '../components/dashboard/CardChart';



function Dashboard(){
    return(
        <div>

        <h1>Dashboard</h1>
        <CardTotalProductos />
        <CardTotalUsuarios />
        <CardTotalCategorias />
        <CardUltimoUsuario />
        <CardUltimoProducto />
        <CardChart />



        
        </div>
    );
}


export default Dashboard;