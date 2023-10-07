import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Productos from './pages/Productos';
import Categorias from './pages/Categorias';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <div className='body'>
      <Login />
      <Sidebar />

      <div className='main-content'>
      <Routes>
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/productos" exact element={<Productos />} />
      <Route path="/categorias" exact element={<Categorias />} />
      </Routes>
      </div>

    </div>
  );
}




export default App;
