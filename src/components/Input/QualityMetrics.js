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

    const TABLE_STORAGE_INITIAL_RU = [
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
    const TABLE_STORAGE_INITIAL_EN = [
        createData(1, 'Effectiveness of lubricating action', 'additional information..'),
        createData(2, 'Cooling effect efficiency', 'additional information..'),
        createData(3, 'Electricity consumption', 'additional information..'),
        createData(4, 'Probability of failure-free operation', 'additional information..'),
        createData(5, 'Service life', 'additional information..'),
        createData(6, 'Manufacturing labor', 'additional information..'),
        createData(7, 'Standardization and unification factors', 'additional information..'),
        createData(8, 'Safety', 'additional information..'),
        createData(9, 'Patent protection index', 'additional information..'),
        createData(10, 'Patent purity index', 'additional information..'),
        createData(11, 'Overall dimensions', 'additional information..'),
        createData(12, 'Weight', 'additional information..'),
    ]
    const TABLE_STORAGE_INITIAL = TABLE_STORAGE_INITIAL_EN

    const TABLE_HEADERS_RU = ["#", "Название", "Дополнительная информаиця"]
    const TABLE_HEADERS_EN = ["#", "Name", "Additional Information"]
    const TABLE_HEADERS = TABLE_HEADERS_EN

    const HEADERS_RU = ["Почередно введите показатели качества для оценки технических решений (не более 7)", "Показатели качества", "Введено показателей качества :"]
    const HEADERS_EN = ["Enter quality metrics for evaluating technical solutions (max. 7)", "Quality metrics", "Qualyty metrics specified"]
    const HEADERS = HEADERS_EN

    const BUTTONS_RU = ["Добавить"]
    const BUTTONS_EN = ["Add"]
    const BUTTONS = BUTTONS_EN
    
    const [tableStorage, setListStorage] = React.useState(TABLE_STORAGE_INITIAL);
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
                            <Chip label={elementCount} sx={{ fontSize: 22 }} />
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

