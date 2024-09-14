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
import File from './components/File';
import Create from './components/Create';
import Tables from './components/Tables';
import DiagramsDesigner from './components/DiagramsDesigner';
import InputData from './components/InputData';
import QualityMetrics from './components/Input/QualityMetrics';
import ElementaryFunctions from './components/Input/ElementaryFunctions';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { Tabs, Tab, AppBar } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SolutionSearch from './components/SolutionSearch';
import Results from './components/Results';

export function App() {
  const handleChange = (event, newValue) => {
    console.log("New value refering :: ", newValue.toString())
    setValue(newValue.toString());
};

const pagesArrayRu = ['Файл', 'Ввод даных', 'Поиск решений', 'Вывод результатов']
const pagesArrayEn = ['File', 'Data input', 'Silution search', 'Result']
const pagesArray = pagesArrayEn

const pagesLinksArray = ['file/*', 'inputData/*', 'solutionSearch', 'results',]
const [value, setValue] = React.useState(pagesLinksArray[0]);
  return (

    <BrowserRouter>
      <div className="main">
      <Tabs
                value={value}
                onChange={handleChange}
                // textColor="secondary"
                // indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {pagesArray.map((_, index) => (
                    <Tab
                        key={index}
                        component={Link}
                        to={pagesLinksArray[index]}
                        label={pagesArray[index]} value={pagesLinksArray[index]} />
                ))}
            </Tabs>


        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/file/*" element={<File />} />
          <Route path="/inputData/*" element={<InputData />} />
          <Route path="/solutionSearch" element={<SolutionSearch />} />
          <Route path='/results' element={<Results />} />
        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
