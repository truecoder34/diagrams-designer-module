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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';

import AddButton from '../SubComponents/AddButton';


import TablePagination from '@mui/material/TablePagination';

import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';

export default function ConstructionElements() {
    const [value, setValue] = React.useState('1');


    const handleChange = (event) => {
        setQualityMetric(event.target.value);
    };

    const [constructionElementName, setConstructionElementName] = React.useState('');
    const [qualityMetric, setQualityMetric] = React.useState('');

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const addConstructionElement = (event) => {
        // TODO :: Добавить 
        event.preventDefault();

    }
    const selectConstructionElement = (constructionElementName) => {
        setConstructionElementName(constructionElementName)
        console.log("[DEBUG]: active scheme new : ", constructionElementName)
    }

    function createData(number, name, scheme, patentNumber,
        elementaryFunctions, qualityMetrics, expertsScore) {
        return {
            number, name, scheme, patentNumber,
            elementaryFunctions, qualityMetrics, expertsScore
        };
    }

    function createDataCQualiryMetric(number, name, description) {
        return { number, name, description };
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    const qualityMetricsInitial = [
        createDataCQualiryMetric(1, 'Эффективность смазывающего воздействия', 'дополнительная информация..'),
        createDataCQualiryMetric(2, 'Эффективность охлаждающего воздействия', 'дополнительная информация..'),
        createDataCQualiryMetric(3, 'Рассход электроэнергии', 'дополнительная информация..'),
        createDataCQualiryMetric(4, 'Вероятность безотказной работы', 'дополнительная информация..'),
        createDataCQualiryMetric(5, 'Срок службы', 'дополнительная информация..'),
        createDataCQualiryMetric(6, 'Трудоемкость изготовления', 'дополнительная информация..'),
        createDataCQualiryMetric(7, 'Коэффициент стандартизации и унификации', 'дополнительная информация..'),
        createDataCQualiryMetric(8, 'Безопсность', 'дополнительная информация..'),
        createDataCQualiryMetric(9, 'Показатель патентной защиты', 'дополнительная информация..'),
        createDataCQualiryMetric(10, 'Показатель патентной чвстоты', 'дополнительная информация..'),
        createDataCQualiryMetric(11, 'Габаритные размеры', 'дополнительная информация..'),
        createDataCQualiryMetric(12, 'Масса', 'дополнительная информация..'),
    ]

    const buttonLabelsRu = ["Добавить"]
    const buttonLabelsEn  = ["Add"]
    const buttonLabels = buttonLabelsEn

    const tableHeadersRu = ["Название", "Номер патента", "Ресурс"]
    const tableHeadersEn = ["Name", "Patent number", "Source"]
    const tableHeaders = tableHeadersEn


    const tableHeadersExtendedRu = ["Название", "Схема", "Номер патента", "Элементарные функции", "Показатели качества", "Экспертные оценки"]
    const tableHeadersExtendedEn = ["Name", "Schem", "Patent number", "Basic functions", "Quality metrics", "Expert assesments"]
    const tableHeadersExtended = tableHeadersExtendedEn

    const tableStorageReducedInitialRu = [
        createData(33, 'Катодный цилиндр', '/images/Конструктивный_Элемент_1.png',
            'RU 94 770 U1', 'ссылка на ресурс 3'),
        createData(34, 'Катодный цилиндр', '/images/Конструктивный_Элемент_2.png',
            'SU 1232092 A1', 'ссылка на ресурс 1'),
        createData(35, 'Катодный цилиндр', '/images/Конструктивный_Элемент_3.png', 'SU 660520 A1', 'ссылка на ресурс 2'),
    ]
    const tableStorageReducedInitialEn = [
        createData(33, 'Cathode roll ', '/images/Конструктивный_Элемент_1.png',
            'RU 94 770 U1', 'https://link_1'),
        createData(34, 'Cathode roll ', '/images/Конструктивный_Элемент_2.png',
            'SU 1232092 A1', 'https://link_2'),
        createData(35, 'Cathode roll ', '/images/Конструктивный_Элемент_3.png', 'SU 660520 A1', 'https://link_3'),
    ]
    const tableStorageReducedInitial = tableStorageReducedInitialEn


    const [tableStorageReduced, setListStorageReduced] = React.useState(tableStorageReducedInitial);


    const tableStorageInitialRu = [
        createData(33, 'Катодный цилиндр', '/images/Конструктивный_Элемент_1.png',
            'RU 94 770 U1',
            'f 3 (e 1 тер ); f 5 (i 13 ); f 5 (i 31,2 ); f 6 (e 05 гид )',
            '(1)2 (2)4 (4)1 (5)1 (6)1 (7)7 (8)1 (9)1 (10)1 (11)1 (12)1',
            '{3}=3 {5;6;3;3}=4,25 {5}=5 {3}=3 {3}=3 {5}=5 {6}=6 {2}=2 {5}=5 {5}=5 {5}=5'),
        createData(34, 'Катодный цилиндр', '/images/Конструктивный_Элемент_2.png',
            'SU 1232092 A1',
            'f 3 (e 1 тер ); f 3 (e 2 тер ); f 5 (i 13 ); f 6 (e 05 гид )',
            '(1)2 (2)4 (4)1 (5)1 (6)1 (7)1 (8)1 (9)1 (10)1 (11)1 (12)1',
            '{6;6}=6 {8;9;6;6}=7,25 {9}=9 {8}=8 {9}=9 {9}=9 {9}=9 {7}=7 {8}=8 {9}=9 {8}=8'),
        createData(35, 'Катодный цилиндр', '/images/Конструктивный_Элемент_3.png', 'SU 660520 A1',
            'f 3 (e 1 тер ); f 3 (e 2 тер ); f 5 (i 13 );f 5 (i 31,2 )',
            '(1)1 (2)4 (4)1 (5)1 (6)1 (7)1 (9)1 (10)1 (11)1 (12)1',
            '{5}=5 {7;8;5;4}=5,5 {8}=8 {7}=7 {7}=7 {8}=8 {8}=8 {5}=5 {7}=7 {8}=8'),
    ]

    const tableStorageInitialEn = [
        createData(33, 'Cathode roll', '/images/Конструктивный_Элемент_1.png',
            'RU 94 770 U1',
            'f 3 (e 1 тер ); f 5 (i 13 ); f 5 (i 31,2 ); f 6 (e 05 гид )',
            '(1)2 (2)4 (4)1 (5)1 (6)1 (7)7 (8)1 (9)1 (10)1 (11)1 (12)1',
            '{3}=3 {5;6;3;3}=4,25 {5}=5 {3}=3 {3}=3 {5}=5 {6}=6 {2}=2 {5}=5 {5}=5 {5}=5'),
        createData(34, 'Cathode roll', '/images/Конструктивный_Элемент_2.png',
            'SU 1232092 A1',
            'f 3 (e 1 тер ); f 3 (e 2 тер ); f 5 (i 13 ); f 6 (e 05 гид )',
            '(1)2 (2)4 (4)1 (5)1 (6)1 (7)1 (8)1 (9)1 (10)1 (11)1 (12)1',
            '{6;6}=6 {8;9;6;6}=7,25 {9}=9 {8}=8 {9}=9 {9}=9 {9}=9 {7}=7 {8}=8 {9}=9 {8}=8'),
        createData(35, 'Cathode roll', '/images/Конструктивный_Элемент_3.png', 'SU 660520 A1',
            'f 3 (e 1 тер ); f 3 (e 2 тер ); f 5 (i 13 );f 5 (i 31,2 )',
            '(1)1 (2)4 (4)1 (5)1 (6)1 (7)1 (9)1 (10)1 (11)1 (12)1',
            '{5}=5 {7;8;5;4}=5,5 {8}=8 {7}=7 {7}=7 {8}=8 {8}=8 {5}=5 {7}=7 {8}=8'),
    ]

    const tableStorageInitial = tableStorageInitialEn

    const labelsHeadersEn = ["Construction elements", "List of choosen elements", "Data Input", "Construction element name", "Quality metrics", "Value"]
    const labelsHeadersRu = ["Конструктивные элементы", "Список отобранных конструктивных элементов", "Ввод данных", "Название конструктивного элемента", "Показатели качества", "Значение показателя качества"]
    const labelsHeaders = labelsHeadersEn



    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);


    function valuetext(value) {
        return `${value}`;
    }

    return (
        <div>
            <h2>{labelsHeaders[0]}</h2>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}  >
                <Grid container sx={{ pl: 4, pr: 4 }} rowSpacing={1} columnSpacing={2}   >
                    <Grid container rowSpacing={1} columnSpacing={2} xs={12}>
                        <Grid sx={{ pl: 2, pr: 2 }} item xs={4}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                {labelsHeaders[1]}
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650, maxHeight: 50 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell sx={{ fontSize: 20 }} >#</TableCell>
                                            <TableCell sx={{ fontSize: 20 }} align="center">{tableHeadersEn[0]}</TableCell>
                                            <TableCell sx={{ fontSize: 20 }} align="center">{tableHeadersEn[1]}</TableCell>
                                            <TableCell sx={{ fontSize: 20 }} align="center">{tableHeadersEn[2]}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tableStorageReduced.map((row) => (
                                            <TableRow
                                                onClick={() => selectConstructionElement(row.name)}
                                                hover
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell sx={{ fontSize: 16 }}>
                                                    {row.number}
                                                </TableCell>
                                                <TableCell sx={{ fontSize: 16 }} component="th" scope="row" align="left" >{row.name}</TableCell>
                                                <TableCell sx={{ fontSize: 16 }} align="left">{row.patentNumber}</TableCell>
                                                <TableCell sx={{ fontSize: 16 }} align="left">{row.sourceURL}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={3} //{rows.length}
                                rowsPerPage={3}
                                page={1}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Grid>

                        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}

                        <Grid sx={{ pl: 2, pr: 2 }} item xs={8}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                {labelsHeaders[2]}
                            </Typography>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                                sx={{ mb: 2 }}
                            >
                                <TextField id="outlined-basic" label={labelsHeaders[3]} variant="outlined"
                                    fullWidth
                                    value={constructionElementName}
                                    onChange={e => setConstructionElementName(e.target.value)} />
                                <AddButton onPress={addConstructionElement} name={buttonLabels[0]}></AddButton>
                            </Stack>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <InputLabel id="demo-simple-select-autowidth-label">{labelsHeaders[4]} </InputLabel>
                                <Select sx={{ mt: 4, mb: 2 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={qualityMetric}
                                    label={labelsHeaders[4]}
                                    onChange={handleChange}
                                    defaultValue=""
                                    input={<OutlinedInput />}
                                >
                                    {qualityMetricsInitial.map((row) => (
                                        <MenuItem value={row.number}>{row.name}</MenuItem>
                                    ))}

                                </Select>

                            </Stack>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <InputLabel id="demo-simple-select-autowidth-label">{labelsHeaders[5]}</InputLabel>
                                <Slider
                                    aria-label={labelsHeaders[5]}
                                    defaultValue={3}
                                    getAriaValueText={valuetext}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={1}
                                    max={10}
                                />
                            </Stack>

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
                                        <TableCell sx={{ fontSize: 23 }}>#</TableCell>
                                        <TableCell sx={{ fontSize: 23 }} align="center">{tableHeadersExtended[0]}</TableCell>
                                        <TableCell sx={{ fontSize: 23 }} align="center">{tableHeadersExtended[1]}</TableCell>
                                        <TableCell sx={{ fontSize: 23 }} align="center">{tableHeadersExtended[2]}</TableCell>
                                        <TableCell sx={{ fontSize: 23 }} align="center">{tableHeadersExtended[3]}</TableCell>
                                        <TableCell sx={{ fontSize: 23 }} align="center">{tableHeadersExtended[4]}</TableCell>
                                        <TableCell sx={{ fontSize: 23 }} align="center">{tableHeadersExtended[5]}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableStorage.map((row) => (
                                        <TableRow
                                            hover
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell sx={{ fontSize: 18 }} >
                                                {row.number}
                                            </TableCell>
                                            <TableCell sx={{ fontSize: 18 }} component="th" scope="row" align="left" >{row.name}</TableCell>
                                            <TableCell sx={{ fontSize: 18 }} align="left"><img src={row.scheme} width="400" height="300" /></TableCell>
                                            <TableCell sx={{ fontSize: 18 }} align="left">{row.patentNumber}</TableCell>
                                            <TableCell sx={{ fontSize: 18 }} align="left">{row.elementaryFunctions}</TableCell>
                                            <TableCell sx={{ fontSize: 18 }} align="left">{row.qualityMetrics}</TableCell>
                                            <TableCell sx={{ fontSize: 18 }} align="left">{row.expertsScore}</TableCell>
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

