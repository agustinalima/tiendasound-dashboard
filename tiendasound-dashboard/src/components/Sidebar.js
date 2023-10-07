import {Link} from 'react-router-dom';
import './css/sidebar.css'

function Sidebar(){
    return(
        <div className='sidebar'>

            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696704065/dashboard/logo_w52p4b.svg" alt=""></img>
            <nav>
                <ul>
                <li> <Link to="/dashboard">Dashboard</Link> </li>
                <li> <Link to="/productos">Productos</Link> </li>
                <li> <Link to="/categorias">Categorías</Link> </li>
                </ul>

                <span>Log out</span>
            </nav>
        </div>

    );

}



export default Sidebar;