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

import SearchButton from '../SubComponents/SearchButton';
import InputAdornment from '@mui/material/InputAdornment';
import AddButton from '../SubComponents/AddButton';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

export default function ConstructionElements() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function createData(number, name, scheme, patentNumber, sourceURL) {
        return { number, name, scheme, patentNumber, sourceURL };
    }
    const tableStorageInitial = [
        createData(1, 'Устройство для подачи СОЖ', '/images/Конструктивный_Элемент_1.png',
            'RU № 2 203 165 B23С 5/28', 'ссылка на ресурс 1'),
        createData(2, 'Устройство охлаждения зоны резания', '/images/Конструктивный_Элемент_2.png', 'ИИ_1', 'ссылка на ресурс 2'),
        createData(2, 'Устройство для подачи охлаждающей жидкости', '/images/Конструктивный_Элемент_3.png',
            'SU № 1454651 B23Q 11/10', 'ссылка на ресурс 3'),
    ]
    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);

    const templateFoundElements = ['element 1', 'element 2', ' element 3']

    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    const addConstructionElement = (event) => {
        // TODO :: Добавить 
        event.preventDefault();

    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }} >

            <div>
                <h3>Просмотр конструктивных элементов</h3>
            </div>


            <Grid sx={{ pt: 1 }} container rowSpacing={1} columnSpacing={2}>
                {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
                <Grid item xs={12}>
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
                        < Divider orientation="vertical" variant="middle" flexItem />
                        <TextField
                            id="outlined-patent-name-input"
                            label="Номер патента"
                            autoComplete="current-patent-name"
                        />
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <SearchButton></SearchButton>

                    </Stack>
                </Grid>

                <Grid item xs={12} container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Результаты поиска
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 360, 
                        // bgcolor: 'background.paper'
                         }}>
                            {templateFoundElements.map((row) => (
                                <ListItem>
                                    <ListItemIcon>
                                        <SquareFootIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={row}
                                        secondary={row}
                                    />
                                     <AddButton onPress={addConstructionElement} name={"Добавить"}></AddButton>
                                </ListItem>
                            ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={8}>
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
                                            <TableCell align="left"><img src={row.scheme} width="400" height="300" /></TableCell>
                                            <TableCell align="left">{row.patentNumber}</TableCell>
                                            <TableCell align="left">{row.sourceURL}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>

                </Grid>

                <Grid item xs={12}>

                </Grid>

            </Grid>
        </Box>



    )
}

