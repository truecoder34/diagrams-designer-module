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

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function InputData() {
    const handleChange = (event, newValue) => {
        setValue(newValue.toString());
    };

    const subPagesArray = ['Начальная страница', 'Описание устройства',
        'Модель ФПД', 'Конструктивные элементы', 'Показатели и функции']
    const subPagesLinksArray = ['mainPage', 'deviceInformation', 'modelPhisics',
        'constructionElements', 'valueFunctions',]
    const [value, setValue] = React.useState(subPagesLinksArray[0]);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Grid container rowSpacing={1} columnSpacing={2}   >
                <Grid item xs={2}>
                    <Toolbar />
                    <Divider />
                    <List>
                        {['Создать', 'Открыть', 'Начальная страница', 'Закрыть', 
                        'Сохранить','Печать','Справка','Выход'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                </Grid>

                <Grid item xs={10}>
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

                </Grid>
            </Grid>







        </Box>
    )
}

