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
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';



import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';

export default function ElementaryFunctions() {
    const [value, setValue] = React.useState('1');

    function createData(number, name, description) {
        return { number, name, description };
    }

    const tableStorageInitial = [
        createData(1, 'Нагнетание воздуха в канал подачи ионизированного газа', 'дополнительная информация..'),
        createData(2, 'Формирование коронного разряда', 'дополнительная информация..'),
        createData(3, 'Отвод теплоты от детали', 'дополнительная информация..'),
        createData(4, 'Отвод теплоты от инструмента', 'дополнительная информация..'),
        createData(5, 'Сообщение кинетической энергии воздуха подсасываемой жидкости', 'дополнительная информация..'),
        createData(6, 'Перемешивание воздуха с жидкостью', 'образование распыленной жидкости'),
        createData(7, 'Обеспечение контакта ионизированного газа с ювенильными поверхностями', 'дополнительная информация..'),
        createData(8, 'Обеспечение электрического разряда между электродами в ионизаторе', 'дополнительная информация..'),
        createData(9, 'Подача ионизированного воздуха в зону резания направленным потоком', 'дополнительная информация..'),
        createData(10, 'Подача распыленной жидкости на поверхность детали и инструмента', 'дополнительная информация..'),
        createData(11, 'Подвод воздуха к соплу  эжектора из цеховой пневмосети', 'дополнительная информация..'),
        createData(12, 'Подвод жидкости в смесительную камеру эжектора', 'дополнительная информация..'),

        createData(13, 'Подача воздуха в ионизатор', 'дополнительная информация..'),
        createData(14, 'Изоляция электрического разряда в ионизаторе от станочного приспособления', 'дополнительная информация..'),
        createData(15, 'Защита ионизатор от утечеки ионизированного воздуха', 'дополнительная информация..'),
    ]

    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);
    const [elementName, setElementName] = useState('');

    const [elementCount, setElementCount] = useState(tableStorage.length);

    const [rowName, setRowName] = React.useState('');

    const addRow = () => {
        console.log("New name :: ", elementName)
        const newListStorage = tableStorage.concat(
            createData(tableStorage.length + 1, elementName, 'дополнительная информация..')
        )
        setListStorage(newListStorage);

        console.log("New ", tableStorage)

        setElementName('');
        setElementCount(tableStorage.length + 1)
    };

    const selectRow = (rowName) => {
        setElementName(rowName)
        console.log("[DEBUG]: active scheme new : ", rowName)
    };


    const deleteRow = (rowName) => {
        let localListStorage = [...tableStorage];
        console.log("Current list storage ", tableStorage)
        for (let i = 0; i < localListStorage.length; i++) {
            if (localListStorage[i].name === rowName) {
                localListStorage.splice(i, 1);
            }
        }

        setListStorage(localListStorage);
        console.log("New list storage ", localListStorage)
    }


    return (

        <div>
            <h2>Введите элементарные функции</h2>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}  >
                <Grid container rowSpacing={1} columnSpacing={2}   >
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel>
                                <h4>Почередно введите элементарные функции (не более 30)</h4>
                            </FormLabel>
                            <br />
                            <FormGroup row >
                                <Grid item xs={11}>
                                    <TextField fullWidth
                                        label="Защита проводящего канала от утечки ионизированного воздуха" id="baseFunction"
                                        value={elementName} onChange={e => setElementName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="contained" color='primary' size="large"
                                        onClick={() => addRow()}
                                    >
                                        Добавить
                                    </Button>
                                </Grid>
                            </FormGroup>
                            <br />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            // divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <h4>Введено элементарных функций :</h4>
                            <Divider orientation="vertical" flexItem />
                            <Chip label={elementCount} />

                        </Stack>
                        <br />
                    </Grid>

                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
                                        <TableCell align="center">Дополнительная информация</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableStorage.map((row) => (
                                        <TableRow
                                            hover
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            onClick={() => selectRow(row.name)}
                                        >
                                            <TableCell >
                                                {row.number}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="right">
                                                <DeleteIcon onClick={() => deleteRow(row.name)} />
                                            </TableCell>
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

