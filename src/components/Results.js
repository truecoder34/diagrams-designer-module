import React, { useState } from 'react';

import axios from 'axios';
import { Box } from '@mui/material';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


import SaveButton from './SubComponents/SaveButton';

export default function Results() {

    const BUTTONS_RU = ["Сохранить"]
    const BUTTONS_EN = ["Save"]
    const BUTTONS = BUTTONS_EN

    const TABLE_HEADERS_RU = ["#", "Название", "Описание", "Схема", "Номер патента"]
    const TABLE_HEADERS_EN = ["#", "Name", "Description", "Schema", "Patent ID"]
    const TABLE_HEADERS = TABLE_HEADERS_EN

    const HEADERS_RU = ["Вывод результатов", "Сформировано тех. решений", "Тех. решение", "Список конструктивных элементов", "Информация об конструктивном элементе", "Сохранить результаты"]
    const HEADERS_EN = ["Results output", "Technical solutions generated", "Technical solution", "List of structural elements", "Information about structural element", "Save results"]
    const HEADERS = HEADERS_EN


    function createData(number, name) {
        return { number, name };
    }
    const TABLE_STORAGE_INITIAL_EN = [
        createData(1, 'Tech. Solution 1'),
        createData(2, 'Tech. Solution 2'),
        createData(3, 'Tech. Solution 3'),
        createData(4, 'Tech. Solution 4'),
        createData(5, 'Tech. Solution 5'),
        createData(6, 'Tech. Solution 6'),
    ]
    const TABLE_STORAGE_INITIAL_RU = [
        createData(1, 'Тех. Решение 1'),
        createData(2, 'Тех. Решение 2'),
        createData(3, 'Тех. Решение 3'),
        createData(4, 'Тех. Решение 4'),
        createData(5, 'Тех. Решение 5'),
        createData(6, 'Тех. Решение 6'),
    ]
    const TABLE_STORAGE_INITIAL = TABLE_STORAGE_INITIAL_EN
    const [tableStorage, setListStorage] = React.useState(TABLE_STORAGE_INITIAL);

    const TABLE_ELEMENTS_STORAGE_INITIAL_EU = [
        createData(1, 'Конструктивный Элемент 1'),
        createData(2, 'Конструктивный Элемент 2'),
        createData(3, 'Конструктивный Элемент 3'),
        createData(4, 'Конструктивный Элемент 4'),
        createData(5, 'Конструктивный Элементе 5'),
        createData(6, 'Конструктивный Элемент 6'),
    ]
    const TABLE_ELEMENTS_STORAGE_INITIAL_EN = [
        createData(1, 'Сonstructive element 1'),
        createData(2, 'Сonstructive element 2'),
        createData(3, 'Сonstructive element 3'),
        createData(4, 'Сonstructive element 4'),
        createData(5, 'Сonstructive element 5'),
        createData(6, 'Сonstructive element 6'),
    ]
    const TABLE_ELEMENTS_STORAGE_INITIAL = TABLE_ELEMENTS_STORAGE_INITIAL_EN
    const [tableElementsStorage, setElementsListStorage] = React.useState(TABLE_ELEMENTS_STORAGE_INITIAL);

    const [elementName, setElementName] = useState('');
    const [elementConstructionName, setElementConstructionName] = useState('');

    const selectRow = (rowName) => {
        setElementName(rowName)
        console.log("[DEBUG]: active scheme new : ", rowName)
    };

    const selectElementsRow = (rowElementName) => {
        setElementConstructionName(rowElementName)
        console.log("[DEBUG]: active scheme new : ", rowElementName)
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', pl: 4, pr: 4 }}>
            <div>
                <h2>{HEADERS[0]}</h2>
            </div>
            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>

                <Grid container item xs={4}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <TextField
                                id="filled-number"
                                label={HEADERS[1]}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                value={tableStorage.length}
                            />
                            <Divider orientation="vertical" flexItem />
                            <TextField fullWidth
                                label={HEADERS[2]} id="baseFunction"
                                value={elementName} onChange={e => setElementName(e.target.value)}
                            />

                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{TABLE_HEADERS[0]}</TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[1]}</TableCell>
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
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                        <Typography sx={{}} variant="h6" component="div">
                        {HEADERS[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{TABLE_HEADERS[0]}</TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[1]} </TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[2]}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {TABLE_ELEMENTS_STORAGE_INITIAL.map((row) => (
                                        <TableRow
                                            hover
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            onClick={() => selectElementsRow(row.name)}
                                        >
                                            <TableCell >
                                                {row.number}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>

                <Grid container item xs={8}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography sx={{}} variant="h6" component="div">{HEADERS[4]}</Typography>
                        <Divider orientation="horizontal" flexItem />
                        <TableContainer sx={{ mt: 2 }} component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{TABLE_HEADERS[0]}</TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[1]}</TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[2]}</TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[3]}</TableCell>
                                        <TableCell align="center">{TABLE_HEADERS[4]}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell >
                                            1
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >
                                            2
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} >
                        {/* <Divider orientation="horizontal" flexItem /> */}

                    </Grid>

                </Grid>

                <Grid container item xs={12}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid container sx={{ mt: 1 }} item xs={12}>
                        <Typography sx={{}} variant="h6" component="div">
                        {HEADERS[5]}
                        </Typography>
                    </Grid>


                    <Grid container sx={{ mt: 1 }} item xs={4}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Typography sx={{}} variant="h7" component="div"> {HEADERS[3]}</Typography>
                            <SaveButton labelName={BUTTONS[0]}></SaveButton>
                        </Stack>
                    </Grid>

                    <Grid container sx={{ mt: 1 }} item xs={8}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Typography sx={{}} variant="h7" component="div">{HEADERS[4]}</Typography>
                            <SaveButton labelName={BUTTONS[0]}></SaveButton>
                        </Stack>
                    </Grid>



                </Grid>
            </Grid>

        </Box>
    )
}

