import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Box, Tab } from '@mui/material';

import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import Grid from '@mui/material/Grid';


import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Stack from '@mui/material/Stack';

import TableCustom from '../SubComponents/TableCustom'
import SaveButton from '../SubComponents/SaveButton';

export default function Schemes() {
    const [value, setValue] = React.useState('1');
    const [value2, setValue2] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%', maxHeight: '100%' }} >

            <div>
                <h2>Схемы</h2>
            </div>

            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <ImageList sx={{
                        width: "100%",
                        height: 500,
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
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>


            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={6}>
                    <TabContext
                        sx={{
                            // display: 'flex', 
                            // flexWrap: 'wrap', 
                            //maxWidth: '250',
                            // height: 350,
                            // maxHeight: '250',
                        }}
                        value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Схема" value="1" />
                                <Tab label="Описание" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ImageList sx={{
                                width: "100%",
                                height: 350,
                                transform: 'translateZ(0)',
                                display: "block",
                            }}
                                rowHeight={200}
                                gap={10}>
                                <ImageListItem key={itemDataFPD[0].img} cols={1} rows={1}>
                                    <img
                                        srcSet={`${itemDataFPD[0].img}`} //?w=500&h=500&fit=crop&auto=format&dpr=2 2x
                                        src={`${itemDataFPD[0].img}`}  // ?w=250&h=250&fit=crop&auto=format
                                        alt={itemDataFPD[0].title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={itemDataFPD[0].title}
                                        position="top"
                                    />
                                </ImageListItem>
                            </ImageList>


                        </TabPanel>
                        <TabPanel value="2">
                            Таблица описания графа
                            <TableCustom></TableCustom>
                        </TabPanel>
                    </TabContext>
                    {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
                </Grid>
                <Grid item xs={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <h3>Описание устрйоства </h3>
                        <Divider orientation="vertical" variant="middle" flexItem />

                        <SaveButton></SaveButton>
                    </Stack>
                    <Divider orientation="horizontal" variant="middle" flexItem />


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


            <Grid sx={{
                // display: 'flex', 
                // flexWrap: 'wrap', 
                // maxWidth: '250',
                // height: '250',
                // maxHeight: '250',
            }}
                container
                rowSpacing={1}
                columnSpacing={2}>
                <Grid item xs={6}>
                    <TabContext
                        sx={{
                            // height: 350,
                            // maxHeight: '350',
                        }}
                        value={value2}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange2} aria-label="lab API tabs example">
                                <Tab label="Схема" value="1" />
                                <Tab label="Описание" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ImageList sx={{
                                width: "100%",
                                height: 350,
                                transform: 'translateZ(0)',
                                display: "block",
                            }}
                                rowHeight={200}
                                gap={10}>

                                <ImageListItem key={itemDataFPD[1].img} cols={1} rows={1}>
                                    <img
                                        srcSet={`${itemDataFPD[1].img}`} //?w=500&h=500&fit=crop&auto=format&dpr=2 2x
                                        src={`${itemDataFPD[1].img}`}  // ?w=250&h=250&fit=crop&auto=format
                                        alt={itemDataFPD[1].title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={itemDataFPD[1].title}
                                        position="top"
                                    />
                                </ImageListItem>

                            </ImageList>

                        </TabPanel>
                        <TabPanel value="2">
                            Таблица описания графа
                            <TableCustom></TableCustom>
                        </TabPanel>
                    </TabContext>
                </Grid>
                <Grid item xs={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <h3>Описание устрйоства </h3>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <SaveButton></SaveButton>
                    </Stack>
                    <Divider orientation="horizontal" variant="middle" flexItem />
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

        </Box>



    )
}

