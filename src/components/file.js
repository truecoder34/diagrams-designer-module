import React, { useState } from 'react';
import {
    BrowserRouter,
    NavLink,
    Routes,
    Route,
    Router,
    Navigate,
    Link,
} from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';
import { Box, Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';


import MainPage from './file/main-page';
import DeviceInformation from './file/device-information';
import ModelPhisics from './file/model-phisics';
import ConstructionElements from './file/construction-elements';
import ValueFunctions from './file/values-functions';

export default function InputData() {
    const handleChange = (event, newValue) => {
        setValue(newValue.toString());
    };
    
    const subPagesArray = ['Начальная страница', 'Описание устройства',
    'Модель ФПД', 'Конструктивные элементы', 'Показатели и функции']
    const subPagesLinksArray = ['mainPage','deviceInformation', 'modelPhisics', 
        'constructionElements', 'valueFunctions',]
    const [value, setValue] = React.useState(subPagesLinksArray[0]);
    
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                // textColor="secondary"
                // indicatorColor="secondary"
                aria-label=""
            >
                {subPagesArray.map((_, index) => (
                    <Tab
                        key={index}
                        component={Link}
                        to={subPagesLinksArray[index]}
                        label={subPagesArray[index]} value={subPagesLinksArray[index]} />
                ))}
            </Tabs>

            <Routes>
                <Route path='mainPage' element={<MainPage />} />
                <Route path='deviceInformation' element={<DeviceInformation />} />
                <Route path='modelPhisics' element={<ModelPhisics />} />
                <Route path='constructionElements' element={<ConstructionElements />} />
                <Route path='valueFunctions' element={<ValueFunctions />} />
            </Routes>

        </Box>
    )
}

