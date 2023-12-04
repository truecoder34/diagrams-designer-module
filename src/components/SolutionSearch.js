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
import AddButton from './SubComponents/AddButton';
import LinearProgress from '@mui/material/LinearProgress';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';

export default function SolutionSearch() {

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1], checked[2]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked, checked[2]]);
    };
    const handleChange4 = (event) => {
        setChecked([checked[0], checked[1], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Показатели качества"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="Элементарные функции"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="Конструктивные элементы"
                control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
            />
        </Box>
    );


    const checkAllData = () => {

    }

    const startSearch = () => {

    }


    return (
        <Box sx={{ width: '100%', typography: 'body1', pl: 4, pr: 4 }}>
            <div>
                <h2>Поиск решений</h2>
            </div>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                        Проверка наличия исходных данных
                    </Typography>
                </Grid>
                <Grid container item xs={2}> </Grid>
                <Grid container item xs={4}> </Grid>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mb: 2 }} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Typography sx={{
                        // mt: 4, mb: 2 
                    }} variant="h6" component="div">
                        Информация о ходе проверки
                    </Typography>
                </Grid>
                <Grid container item xs={2}> </Grid>
                <Grid container item xs={4}> </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <div>
                        <FormControlLabel
                            label="Выделить целиком"
                            control={
                                <Checkbox
                                    checked={checked[0] && checked[1] && checked[2]}
                                    indeterminate={checked[0] !== checked[1] || checked[1] !== checked[2] || checked[0] !== checked[2]}
                                    onChange={handleChange1}
                                />
                            }
                        />
                        {children}
                    </div>
                </Grid>
                <Grid container item xs={1}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </Grid>
                <Grid container item xs={5}>
                    <AddButton onPress={checkAllData} name={"Проверить"}></AddButton>
                </Grid>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mb: 2 }} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                        Поиск технических решений
                    </Typography>

                </Grid>
                <Grid container item xs={2}> </Grid>
                <Grid container item xs={4}> </Grid>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mb: 2 }} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6" component="div">
                        Информация о процесе
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <LinearProgress />
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>


            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Grid sx={{ mt:2 }} item xs={6}>
                        <Typography  variant="h7" component="div">
                            Количество обрабытваемых тенических решний
                        </Typography>
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={4}>
                        <TextField
                            id="filled-number"
                            label="Количество"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={2}>
                    </Grid>

                    <Grid sx={{ mt:2 }} item xs={6}>
                        <Typography sx={{}} variant="h7" component="div">
                            Количество сформированных списков конструктивных элементов
                        </Typography>
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={4}>
                        <TextField
                            id="filled-number"
                            label="Количество"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={2}>
                    </Grid>

                </Grid>
                <Grid container item xs={1}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </Grid>
                <Grid container item xs={5}>
                    <AddButton onPress={checkAllData} name={"Сформировать технические решения"}></AddButton>
                </Grid>
            </Grid>

            {/* <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={2}>
                    <Typography sx={{}} variant="h7" component="div">
                        Количество обрабытваемых тенических решний
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="filled-number"
                        label="Количество"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={2}>
                    <Typography sx={{}} variant="h7" component="div">
                        Количество сформированных списков конструктивных элементов
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="filled-number"
                        label="Количество"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>

 */}

        </Box>
    )
}

