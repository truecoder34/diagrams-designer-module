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

import Typography from '@mui/material/Typography';
import AddButton from '../SubComponents/AddButton';

import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';

export default function ElementaryFunctions() {
    const [value, setValue] = React.useState('1');

    function createData(number, name, description) {
        return { number, name, description };
    }

    const TABLE_STORAGE_INITIAL_RU = [
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
    const TABLE_STORAGE_INITIAL_EN = [
        createData(1, 'Injection of air into the ionized gas supply channel', 'additional information...'),
        createData(2, 'Corona discharge formation', 'additional information...'),
        createData(3, 'Heat dissipation from the part', 'additional information...'),
        createData(4, 'Heat dissipation from tool', 'additional information...'),
        createData(5, 'Transfer of air kinetic energy to the sucked liquid', 'additional information...'), 
        createData(6, 'Mixing air with liquid', 'formation of atomized liquid'),
        createData(7, 'Providing contact of ionized gas with juvenile surfaces', 'additional info...'),
        createData(8, 'Providing electrical discharge between electrodes in an ionizer', 'additional info...'),
        createData(9, 'Supplying ionized air to the cutting zone with a directional flow', 'additional information...'),
        createData(10, 'Supply of atomized liquid to the workpiece and tool surface', 'additional information...'),
        createData(11, 'Supply air to the ejector nozzle from the shop pneumatic network', 'additional information...'),
        createData(12, 'Liquid supply to the mixing chamber of the ejector', 'additional information...'),
        createData(13, 'Air supply to the ionizer', 'additional information...'),
        createData(14, 'Isolation of electric discharge in the ionizer from the machine tool', 'additional information...'),
        createData(15, 'Protection of the ionizer against leakage of ionized air', 'additional information...')
    ]

    const TABLE_STORAGE_INITIAL = TABLE_STORAGE_INITIAL_EN

    const TABLE_HEADERS_RU = ["#", "Название", "Дополнительная информаиця"]
    const TABLE_HEADERS_EN = ["#", "Name", "Additional Information"]
    const TABLE_HEADERS = TABLE_HEADERS_EN

    const HEADERS_RU = ["Почередно введите элементарные функции (не более 30)", "элементраная функция", "Введено элементарных функций :"]
    const HEADERS_EN = ["Enter basic functions (max. 30)", "basic function", "Basic functions specified"]
    const HEADERS = HEADERS_EN

    const BUTTONS_RU = ["Добавить"]
    const BUTTONS_EN = ["Add"]
    const BUTTONS = BUTTONS_EN


    const [tableStorage, setListStorage] = React.useState(TABLE_STORAGE_INITIAL);
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
        setElementCount(tableStorage.length)
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

        setElementCount(localListStorage.length)
        setListStorage(localListStorage);
        console.log("New list storage ", localListStorage)
    }


    return (

        <div>
            <Box sx={{
                display: 'flex', flexWrap: 'wrap', maxWidth: '95%', marginTop: "2rem",
                marginLeft: "1rem", marginRight: "1rem"
            }}  >
                <Grid container rowSpacing={1} columnSpacing={2}   >
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel>
                                <Typography variant="h6" component="div">
                                    {HEADERS[0]}
                                </Typography>
                            </FormLabel>
                            <br />
                            <FormGroup row >
                                <Grid item xs={11}>
                                    <TextField fullWidth
                                        label={HEADERS[1]} id="baseFunction"
                                        value={elementName} onChange={e => setElementName(e.target.value)}
                                        inputProps={{
                                            sx: {
                                                fontSize: 20,
                                                fontWeight: 500,
                                                lineHeight: '30px',
                                            }
                                        }} // font size of input text
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: {
                                                fontSize: 20,
                                                fontWeight: 600,
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <AddButton onPress={addRow} name={BUTTONS[0]}></AddButton>
                                </Grid>
                            </FormGroup>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <Typography sx={{ fontSize: 22 }} variant="h4" component="div">
                                {HEADERS[2]}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Chip label={elementCount}  sx={{ fontSize: 22 }} />
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: 20 }}>{TABLE_HEADERS[0]}</TableCell>
                                        <TableCell sx={{ fontSize: 20 }} align="center">{TABLE_HEADERS[1]}</TableCell>
                                        <TableCell sx={{ fontSize: 20 }} align="center">{TABLE_HEADERS[2]}</TableCell>
                                        <TableCell sx={{ fontSize: 20 }} align="right"></TableCell>
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
                                            <TableCell sx={{ fontSize: 17 }} >
                                                {row.number}
                                            </TableCell>
                                            <TableCell sx={{ fontSize: 17 }} component="th" scope="row" align="left" >{row.name}</TableCell>
                                            <TableCell sx={{ fontSize: 17 }} align="left">{row.description}</TableCell>
                                            <TableCell sx={{ fontSize: 17 }} align="right">
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

