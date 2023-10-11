import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';

import TextField from '@mui/material/TextField';
import { FormLabel, FormControl, FormGroup, Divider } from '@mui/material';



import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function ConstructionElements() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function createData(number, name, scheme, patentNumber, sourceURL) {
        return { number, name, scheme, patentNumber, sourceURL };
    }
    const tableStorageInitial = [
        createData(1, 'Устройство для подачи СОЖ', '/images/Устройство_для_Подачи_СОЖ_RU_№2_203_165_B23С_5_28.png',
        'RU № 2 203 165 B23С 5/28', 'ссылка на ресурс 1'),
        createData(2, 'Устройство охлаждения зоны резания', 'scheme', 'ИИ_1','ссылка на ресурс 2'),
        createData(2, 'Устройство для подачи охлаждающей жидкости', '/images/Устройство_для_Подачи_Охл_жидкости_RU_№994214.png', 
        'SU № 1454651 B23Q 11/10', 'ссылка на ресурс 3'), 
    ]
    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }} >

            <div>
                <h2>Конструктивные элементы</h2>
            </div>

            <Grid container rowSpacing={1} columnSpacing={2}>

                {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
                <Grid item xs={12}>
                    {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >

                        <TextField
                            id="outlined-name-input"
                            label="Название"
                            type="search"
                            autoComplete="current-name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <TextField
                            id="outlined-patent-name-input"
                            label="Номер патента"
                            autoComplete="current-patent-name"
                        />

                    </Stack>
                </Grid>
                
                <Grid item xs={12}>
                <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
                                        <TableCell align="center">Схема</TableCell>
                                        <TableCell align="center">Номер патента</TableCell>
                                        <TableCell align="center">Ресурс</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableStorage.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell >
                                                {row.number}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                            <TableCell align="left"><img src={row.scheme} /></TableCell>                                            
                                            <TableCell align="left">{row.patentNumber}</TableCell>
                                            <TableCell align="left">{row.sourceURL}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </Grid>
                
            </Grid>
        </Box>



    )
}

