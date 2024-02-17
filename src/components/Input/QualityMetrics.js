import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TextField from '@mui/material/TextField';
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
import Typography from '@mui/material/Typography';
import AddButton from '../SubComponents/AddButton';

export default function QualityMetrics() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(number, name, description) {
        return { number, name, description };
    }

    const tableStorageInitial = [
        createData(1, 'Эффективность смазывающего воздействия', 'дополнительная информация..'),
        createData(2, 'Эффективность охлаждающего воздействия', 'дополнительная информация..'),
        createData(3, 'Рассход электроэнергии', 'дополнительная информация..'),
        createData(4, 'Вероятность безотказной работы', 'дополнительная информация..'),
        createData(5, 'Срок службы', 'дополнительная информация..'),
        createData(6, 'Трудоемкость изготовления', 'дополнительная информация..'),
        createData(7, 'Коэффициент стандартизации и унификации', 'дополнительная информация..'),
        createData(8, 'Безопсность', 'дополнительная информация..'),
        createData(9, 'Показатель патентной защиты', 'дополнительная информация..'),
        createData(10, 'Показатель патентной чвстоты', 'дополнительная информация..'),
        createData(11, 'Габаритные размеры', 'дополнительная информация..'),
        createData(12, 'Масса', 'дополнительная информация..'),
    ]

    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);
    const [elementName, setElementName] = useState('');

    const [elementCount, setElementCount] = useState(tableStorage.length);


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
            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '95%', marginTop: "2rem", 
                        marginLeft: "1rem", marginRight: "1rem" }}  >
                <Grid container rowSpacing={1} columnSpacing={2}   >
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel>
                                <Typography variant="h6" component="div">
                                    Почередно введите показатели качества для оценки технических решений (не более 7)
                                </Typography>
                            </FormLabel>
                            <br />
                            <FormGroup row >
                                <Grid item xs={11}>
                                    <TextField fullWidth
                                        label="показатели качества" id="baseFunction"
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
                                    <AddButton onPress={addRow} name={"Добавить"}></AddButton>
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
                                Введено показателей качества :
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Chip label={elementCount} sx={{ fontSize: 22 }} />
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: 20 }}>#</TableCell>
                                        <TableCell sx={{ fontSize: 20 }} align="center">Название</TableCell>
                                        <TableCell sx={{ fontSize: 20 }} align="center">Дополнительная информация</TableCell>
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
                                            <TableCell sx={{ fontSize: 17 }}>
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

