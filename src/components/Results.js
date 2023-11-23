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
    function createData(number, name) {
        return { number, name };
    }
    const tableStorageInitial = [
        createData(1, 'Тех. Решение 1'),
        createData(2, 'Тех. Решение 2'),
        createData(3, 'Тех. Решение 3'),
        createData(4, 'Тех. Решение 4'),
        createData(5, 'Тех. Решение 5'),
        createData(6, 'Тех. Решение 6'),
    ]
    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);

    const tableElementsStorageInitial = [
        createData(1, 'Конструктивный Элемент 1'),
        createData(2, 'Конструктивный Элемент 2'),
        createData(3, 'Конструктивный Элемент 3'),
        createData(4, 'Конструктивный Элемент 4'),
        createData(5, 'Конструктивный Элементе 5'),
        createData(6, 'Конструктивный Элемент 6'),
    ]
    const [tableElementsStorage, setElementsListStorage] = React.useState(tableElementsStorageInitial);

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
                <h2>Вывод результатов</h2>
            </div>
            <Grid xs={12} container rowSpacing={1} columnSpacing={2}   >

                <Grid container item xs={6}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <TextField
                                id="filled-number"
                                label="Сформировано техниеских решений"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                value={tableStorage.length}
                            />
                            <Divider orientation="vertical" flexItem />
                            <TextField fullWidth
                                label="Техническое решение" id="baseFunction"
                                value={elementName} onChange={e => setElementName(e.target.value)}
                            />

                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
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
                            Список конструктивных элементов
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
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название Конструктивного Элемента </TableCell>
                                        <TableCell align="center">Дополнительная информация</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableElementsStorageInitial.map((row) => (
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

                <Grid container item xs={6}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography sx={{}} variant="h6" component="div">
                            Информация об конструктивном элементе
                        </Typography>
                        <Divider orientation="horizontal" flexItem />
                        <TableContainer sx={{ mt: 2 }} component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
                                        <TableCell align="center">Опсание</TableCell>
                                        <TableCell align="center">Схема</TableCell>
                                        <TableCell align="center">Номер патента</TableCell>
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
                                    {/* {tableElementsStorageInitial.map((row) => (
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
                                    ))}  */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} >
                        {/* <Divider orientation="horizontal" flexItem /> */}

                    </Grid>
                    {/* <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid> */}
                </Grid>

                <Grid container item xs={12}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid container sx={{ mt: 1 }} item xs={12}>
                        <Typography sx={{}} variant="h6" component="div">
                            Сохранить результаты
                        </Typography>
                    </Grid>


                    <Grid container sx={{ mt: 1 }} item xs={6}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Typography sx={{}} variant="h7" component="div">
                                Список технических решений
                            </Typography>
                            <SaveButton></SaveButton>
                        </Stack>
                    </Grid>

                    <Grid container sx={{ mt: 1 }} item xs={6}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Typography sx={{}} variant="h7" component="div">
                                Инфомация о конструктивном элементе
                            </Typography>
                            <SaveButton></SaveButton>
                        </Stack>
                    </Grid>



                </Grid>
            </Grid>

        </Box>
    )
}

