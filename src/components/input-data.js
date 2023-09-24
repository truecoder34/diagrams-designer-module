import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';
import { Box, Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from "react-router-dom"

import QualityMetrics from './quality-metrics';

export default function InputData() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const subPagesArray = ['Показатели качества', 'Элементарные функции',
        'Конструктивные элементы', 'Редактирование значений',]
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {subPagesArray.map((_, index) => (
                            <Tab key={index} label={subPagesArray[index]} value={index} />
                        ))}
                    </TabList>
                </Box>
                {subPagesArray.map((_, index) => (
                            <TabPanel key={index}  value={index} 
                            // component={Link} to="/qualityMetrics"
                            >
                            {subPagesArray[index]}
                        </TabPanel>
                ))}
            </TabContext>
        </Box>
    )
}

