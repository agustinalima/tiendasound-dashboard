import {Link} from 'react-router-dom';
import './css/sidebar.css'

function Sidebar(){
    return(
        <div className='sidebar'>

            <div className='logo-container'>
            <img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696704065/dashboard/logo_w52p4b.svg" alt=""></img>
            </div>
            <nav>
                <ul>
                <li><img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696719276/dashboard/Icon-1_rilar4.svg" alt=""></img><Link to="/dashboard">Dashboard</Link> </li>
                <li><img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696719276/dashboard/Icon_sels5y.svg" alt=""></img><Link to="/productos">Productos</Link> </li>
                <li><img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696719277/dashboard/Vector_mobfob.svg" alt=""></img> <Link to="/categorias">Categorías</Link> </li>
                </ul>

                <span className='logout'><img src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696721682/dashboard/logout_tnsdpl.svg" alt=""></img>Log out</span>
            </nav>
        </div>

    );

}



export default Sidebar;