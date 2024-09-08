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


import MainPage from './File/MainPage';
import DeviceInformation from './File/DeviceInformation';
import SchemeDesigner from './File/SchemeDesigner';
import Schemes from './File/Schemes';
import ConstructionElements from './File/ConstructionElements';
import ValueFunctions from './File/ValuesFunctions';

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

import AddIcon from '@mui/icons-material/Add';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FirstPageIcon from '@mui/icons-material/FirstPage';

export default function File() {
    const handleChange = (event, newValue) => {
        setValue(newValue.toString());
    };

    const subPagesArrayRu = ['Начальная страница', 'Описание устройства', 'Редактор', 'Схемы', 'Конструктивные элементы', ]
    const subPagesArrayEn = ['Main page', 'Device information', 'Designer', 'Schemes', 'Construction Elements', ]
    const subPagesArray = subPagesArrayEn
        
        // 'Показатели и функции'
    const subPagesLinksArray = ['mainPage', 'deviceInformation', 'schemeDesigner', 'schemes', 
        'constructionElements', ]       // 'valueFunctions',
    const [value, setValue] = React.useState(subPagesLinksArray[0]);

    const iconsList = [<AddIcon/>, <FileOpenIcon/>,<CloseIcon/>,<SaveIcon/>,<PrintIcon/>,<HelpIcon/>,<ExitToAppIcon/>];
    
    const leftMenuRu = ['Создать', 'Открыть', 'Закрыть', 'Сохранить','Печать','Справка','Выход']
    const leftMenuEn = ['Create', 'Open', 'Close', 'Save','Print','Info','Exit']
    const leftMenu = leftMenuEn 

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Grid  container rowSpacing={1} columnSpacing={2}   >
                <Grid item xs={2}>
                    <Toolbar />
                    <Divider />
                    <List>
                        {leftMenu.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {iconsList[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} 
                                    primaryTypographyProps={{fontSize: '1.4rem'}}
                                    />
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
                        <Route path='schemeDesigner' element={<SchemeDesigner />} />
                        <Route path='schemes' element={<Schemes />} />
                        <Route path='constructionElements' element={<ConstructionElements />} />
                        {/* <Route path='valueFunctions' element={<ValueFunctions />} /> */}
                    </Routes>

                </Grid>
            </Grid>







        </Box>
    )
}

