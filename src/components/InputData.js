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

import QualityMetrics from './Input/QualityMetrics';
import ElementaryFunctions from './Input/ElementaryFunctions';
import ValueChange from './Input/ValueChange';
import ConstructionElements from './Input/ConstructionElements';
import ExpertEstimations from './Input/ExpertEstimations';


export default function InputData() {
    const handleChange = (event, newValue) => {
        console.log("New value refering :: ", newValue.toString())
        setValue(newValue.toString());
    };
    const subPagesArray = ['Показатели качества', 'Элементарные функции',
        'Конструктивные элементы', 'Экспертные оценки', ]               //'Редактирование значений',
    const subPagesLinksArray = ['qualityMetrics', 'elementaryFunctions',
        'constructionElements', 'expertEstimations', ]                  //'valueChange',
    const [value, setValue] = React.useState(subPagesLinksArray[0]);


    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>            
            <Tabs
                value={value}
                onChange={handleChange}
                // textColor="secondary"
                // indicatorColor="secondary"
                aria-label="secondary tabs example"
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
                <Route path='qualityMetrics' element={<QualityMetrics />} />
                <Route path='elementaryFunctions' element={<ElementaryFunctions />} />
                <Route path='constructionElements' element={<ConstructionElements />} />
                <Route path='expertEstimations' element={<ExpertEstimations />} />
                {/* <Route path='valueChange' element={<ValueChange />} /> */}
            </Routes>

        </Box>
    )
}

