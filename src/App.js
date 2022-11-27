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
import DiagramsDesigner from './components/diagrams-designer';



// const electron = window.require('electron');
// const ipcRenderer  = electron.ipcRenderer;

export function App() {
  return (

    <BrowserRouter>
     <div className="main">
      <nav>
        <NavLink to="" >Home</NavLink> | 
        <NavLink to="about" >About</NavLink> | 
        <NavLink to="ddesigner" >Diagrams Designer</NavLink>
      </nav>
      

      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/ddesigner' element={<DiagramsDesigner />} />
      </Routes>
      
    </div>

    </BrowserRouter>

  );
}

export default App;
