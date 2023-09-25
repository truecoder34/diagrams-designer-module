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
    const [value, setValue] = React.useState(3);
    const handleChange = (event, newValue) => {
        console.log("New value renfering :: ", newValue)
        setValue(newValue);

        subPagesArray.map((x, index) => (
            console.log(x, index)
        ))
        subPagesLinksArray.map((x, index) => (
            console.log(x, index)
        ))

    };
    const subPagesArray = ['Показатели качества', 'Элементарные функции',
        'Конструктивные элементы', 'Редактирование значений',]
    const subPagesLinksArray = ['qualityMetrics', 'elementaryFunctions',
        'constructionElements', 'valueChange',]
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {subPagesArray.map((_, index) => (
                            <Tab
                                key={index}
                                component={Link}
                                to={subPagesLinksArray[index]}
                                label={subPagesArray[index]} value={index} />
                        ))}
                    </TabList>
                </Box>
            {/* {subPagesArray.map((num, index) => (
                    <TabPanel key={index} value={index}> </TabPanel>
                ))} */}
            </TabContext>



            <Routes>
                <Route path=':qualityMetrics' element={<QualityMetrics />} />
                <Route path=':elementaryFunctions' element={<ElementaryFunctions />} />
                <Route path=':constructionElements' element={<ConstructionElements />} />
                <Route path=':valueChange' element={<ValueChange />} />
            </Routes>

        </Box>
    )
}

