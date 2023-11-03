import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { FormLabel, FormControl, FormGroup, Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';

export default function ConstructionElements() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function createData(number, name, scheme, patentNumber,
        elementaryFunctions, qualityMetrics, expertsScore) {
        return {
            number, name, scheme, patentNumber,
            elementaryFunctions, qualityMetrics, expertsScore
        };
    }

    const tableStorageReducedInitial = [
        createData(1, 'Устройство для подачи СОЖ', '/images/Устройство_для_Подачи_СОЖ_RU_№2_203_165_B23С_5_28.png',
            'RU № 2 203 165 B23С 5/28', 'ссылка на ресурс 1'),
        createData(2, 'Устройство охлаждения зоны резания', 'scheme', 'ИИ_1', 'ссылка на ресурс 2'),
        createData(2, 'Устройство для подачи охлаждающей жидкости', '/images/Устройство_для_Подачи_Охл_жидкости_RU_№994214.png',
            'SU № 1454651 B23Q 11/10', 'ссылка на ресурс 3'),
    ]
    const [tableStorageReduced, setListStorageReduced] = React.useState(tableStorageReducedInitial);


    const tableStorageInitial = [
        createData(1, 'Устройство для подачи СОЖ', '/images/Устройство_для_Подачи_СОЖ_RU_№2_203_165_B23С_5_28.png',
            'RU № 2 203 165 B23С 5/28',
            'f 3 (e 1 тер ); f 3 (e 2 тер ); f 5 (i 13 ); f 6 (e 05 гид )',
            '(1)2 (2)4 (4)1 (5)1 (6)1 (7)1 (8)1 (9)1 (10)1 (11)1 (12)1',
            '{6;6}=6 {8;9;6;6}=7,25 {9}=9 {8}=8 {9}=9 {9}=9 {9}=9 {7}=7 {8}=8 {9}=9 {8}=8'),
        createData(2, 'Устройство охлаждения зоны резания', 'scheme', 'ИИ_1',
            'f 3 (e 1 тер ); f 3 (e 2 тер ); f 5 (i 13 );f 5 (i 31,2 )',
            '(1)1 (2)4 (4)1 (5)1 (6)1 (7)1 (9)1 (10)1 (11)1 (12)1',
            '{5}=5 {7;8;5;4}=5,5 {8}=8 {7}=7 {7}=7 {8}=8 {8}=8 {5}=5 {7}=7 {8}=8'),
        createData(2, 'Устройство для подачи охлаждающей жидкости', '/images/Устройство_для_Подачи_Охл_жидкости_RU_№994214.png',
            'SU № 1454651 B23Q 11/10',
            'f 3 (e 1 тер ); f 5 (i 13 ); f 5 (i 31,2 ); f 6 (e 05 гид )',
            '(1)2 (2)4 (4)1 (5)1 (6)1 (7)7 (8)1 (9)1 (10)1 (11)1 (12)1',
            '{3}=3 {5;6;3;3}=4,25 {5}=5 {3}=3 {3}=3 {5}=5 {6}=6 {2}=2 {5}=5 {5}=5 {5}=5'),
    ]
    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);

    return (
        <div>
            <h2>Конструктивные элементы</h2>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}  >
                <Grid container sx={{ pl: 4, pl: 4 }} rowSpacing={1} columnSpacing={2}   >
                    <Grid container rowSpacing={1} columnSpacing={2} xs={12}>
                        <Grid item xs={4}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Список отобранных конструктивных элементов
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell align="center">Название</TableCell>
                                            <TableCell align="center">Номер патента</TableCell>
                                            <TableCell align="center">Ресурс</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tableStorageReduced.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell >
                                                    {row.number}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                                <TableCell align="left">{row.patentNumber}</TableCell>
                                                <TableCell align="left">{row.sourceURL}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>
                        <Grid item xs={8}>
                            Ввод данных
                        </Grid>
                    </Grid>
                    <Grid item xs={12}> </Grid>
                    <Grid item xs={12}> </Grid>
                </Grid>
            </Box>




            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }} >
                <Grid sx={{ pl: 4, pl: 4 }} container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
                                        <TableCell align="center">Схема</TableCell>
                                        <TableCell align="center">Номер патента</TableCell>
                                        <TableCell align="center">Элементарные функции</TableCell>
                                        <TableCell align="center">Показатели качества</TableCell>
                                        <TableCell align="center">Экспертные оценки</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableStorage.map((row) => (
                                        <TableRow
                                            hover
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell >
                                                {row.number}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                            <TableCell align="left"><img src={row.scheme} /></TableCell>
                                            <TableCell align="left">{row.patentNumber}</TableCell>
                                            <TableCell align="left">{row.elementaryFunctions}</TableCell>
                                            <TableCell align="left">{row.qualityMetrics}</TableCell>
                                            <TableCell align="left">{row.expertsScore}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

