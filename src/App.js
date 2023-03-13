import logo from './logo.svg';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';
import Create from './components/create';
import Tables from './components/tables';
import DiagramsDesigner from './components/diagrams-designer';



// const electron = window.require('electron');
// const ipcRenderer  = electron.ipcRenderer;

export function App() {
  return (

    <BrowserRouter>
     <div className="main">
      <nav>
        <NavLink to="">Home</NavLink> | 
        <NavLink to="about" >About</NavLink> | 
        <NavLink to="tables">Таблицы</NavLink> | 
        <NavLink to="ddesigner">Конструктор</NavLink>
      </nav>
      

      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/ddesigner' element={<DiagramsDesigner />} />
      </Routes>
      
    </div>

    </BrowserRouter>

  );
}

export default App;
