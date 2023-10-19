import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';

import TextField from '@mui/material/TextField';
import { FormLabel, FormControl, FormGroup, Divider } from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Schemes() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const schemasStorageInitial = [];
    const [listStorage, setListStorage] = React.useState(schemasStorageInitial);


    function srcset(image, width, height, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${width * cols}&h=${height * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


    const itemData = [
        {
            img: '/images/schemesDefault/Структурная_схема_отпаяный_лазер.png',
            title: 'Структурная схема',
            featured: true,
        },
        {
            img: '/images/schemesDefault/Иерархическая_схема_отпаяный_лазер.png',
            title: 'Иерархическая схема',
            featured: true,
        }
    ];

    const itemDataFPD = [
        {
            img: '/images/schemesDefault/Модель_ФПД_Отпаяный_Лазер_1.png',
            title: 'Модель ФПД 1',
        },
        {
            img: '/images/schemesDefault/Модель_ФПД_отпаяный_лазер_2.png',
            title: 'Модель ФПД 2',
        },
    ];

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }} >

            <div>
                <h2>Схемы</h2>
            </div>


            <Grid sx={{
                // display: 'flex', 
                // flexWrap: 'wrap', 
                maxWidth: '250',
                height: '250',
                maxHeight: '250',
            }}
                container
                rowSpacing={1}
                columnSpacing={2}>
                <Grid item xs={6}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Схема" value="1" />
                                <Tab label="Описание" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <h4>
                                {itemData.title}
                            </h4>
                            <img
                                srcSet={`${itemData[0].img}`}  //?w=250&h=250&fit=crop&auto=format&dpr=2 2x
                                src={`${itemData[0].img}`}  // ?w=250&h=250&fit=crop&auto=format
                                alt={itemData.title}
                                loading="lazy"
                            />
                        </TabPanel>
                        <TabPanel value="2">
                            Таблица описания графа
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell align="right"> ID</TableCell>
                                            <TableCell align="right">Имя</TableCell>
                                            <TableCell align="right">Тип</TableCell>
                                            <TableCell align="right">Размеры</TableCell>
                                            <TableCell align="right">Верхний и.</TableCell>
                                            <TableCell align="right">Нижний и.</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {listStorage.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                                <TableCell align="right">{row.id}</TableCell>
                                                <TableCell align="right">{row.name}</TableCell>
                                                <TableCell align="right">{row.type}</TableCell>
                                                <TableCell align="right">{row.x} : {row.y}</TableCell>
                                                <TableCell align="right">{row.upperIndex}</TableCell>
                                                <TableCell align="right">{row.lowerIndex}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </TabContext>
                </Grid>
                <Grid item xs={6}>
                <TextField
                                id="filled-multiline-static"
                                label="Описание устройства"
                                multiline
                                rows={20}
                                fullWidth
                                defaultValue={"xxx"}
                                variant="filled"
                            />
                </Grid>
            </Grid>


            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <ImageList sx={{
                        width: "100%",
                        height: 600,
                        // Promote the list into its own layer in Chrome. 
                        // This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                        rowHeight={200}
                        gap={10}>

                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={1} rows={itemData.length}>
                                <img
                                    srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=500&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>

                <Grid item xs={12}>
                    <ImageList sx={{
                        width: "100%",
                        height: 600,
                        // Promote the list into its own layer in Chrome. 
                        // This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                        rowHeight={200}
                        gap={10}>

                        {itemDataFPD.map((item) => (
                            <ImageListItem key={item.img} cols={1} rows={itemDataFPD.length}>
                                <img
                                    srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=500&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>

            </Grid>
        </Box>



    )
}

