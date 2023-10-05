import logo from './logo.svg';
import * as React from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';

import './App.css';
import File from './components/file';
import Create from './components/create';
import Tables from './components/tables';
import DiagramsDesigner from './components/diagrams-designer';
import InputData from './components/input-data';
import QualityMetrics from './components/input/quality-metrics';
import ElementaryFunctions from './components/input/elementary-functions';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { Tabs, Tab, AppBar } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export function App() {

  return (

    <BrowserRouter>
      <div className="main">
        <nav>
          <NavLink to="">*</NavLink> |
          <NavLink to="file">Файл</NavLink> |
          <NavLink to="inputData" >Ввод данных</NavLink> |
          <NavLink to="about" >Поиск решений</NavLink> |
          <NavLink to="about" >Значения показателей</NavLink> |
          <NavLink to="about" >Вывод результатов</NavLink> |
          <NavLink to="tables">Таблицы</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/file/*" element={<File />} />
          <Route path="/inputData/*" element={<InputData />} />
          <Route path='/tables' element={<Tables />} />
        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
