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

import QualityMetrics from './input/quality-metrics';
import ElementaryFunctions from './input/elementary-functions';
import ValueChange from './input/value-change';
import ConstructionElements from './input/construction-elements';


export default function InputData() {
    const handleChange = (event, newValue) => {
        console.log("New value refering :: ", newValue.toString())
        setValue(newValue.toString());
    };
    const subPagesArray = ['Показатели качества', 'Элементарные функции',
        'Конструктивные элементы', 'Редактирование значений',]
    const subPagesLinksArray = ['qualityMetrics', 'elementaryFunctions',
        'constructionElements', 'valueChange',]
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
                <Route path='valueChange' element={<ValueChange />} />
            </Routes>

        </Box>
    )
}

