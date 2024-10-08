import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Box, Tab, Tabs, Link } from '@mui/material';

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
    
    const STRUCTURE_SCHEME_DESCRIPTION_EN = "In the structural diagram, rectangles highlighted in green color denote subsystems; rectangles in black color denote laser elements either included in the subsystems or interacting with them; rectangles highlighted in red color denote functional modules included in the laser.  Based on the structural diagram, a model of the CO2 laser FFT is constructed for each functional module (FM) and then a combined model of the FFT of the desoldered CO2 laser.  \nThe desoldered CO2 laser consists of three subsystems: \n- emitter (subsystem 1); \n - cooling system (subsystem 2); \n - power supply unit (subsystem 3). \n\nThe desoldered CO2 laser consists of four FMs: \n - FM1 - gas discharge tube (working body v1 - mixture of gases in the gas discharge tube, working body v2 - tube walls); \n - FM2 - cooling jacket (working body v4 - cooling liquid); \n - FM3 - regenerator (working body v3 - regenerator substance Cu2O); \n - FM4 - electrodes (working body v5 - anode and working body v6 - cathode). "
    const STRUCTURE_SCHEME_DESCRIPTION_RU = "На структурной схеме прямоугольники, выделенные зеленым цветом, обозначают подсистемы; прямоугольники черного цвета – обозначают элементы лазера, либо входящие в подсистемы, либо взаимодействующие с ними; прямоугольники, выделенные красным цветом, обозначают функциональные модули, входящие в состав лазера.  На основании структурной схемы строится модель ФПД СО2-лазера для каждого функционального модуля (ФМ) и затем объединенная модель ФПД отпаянного СО2-лазера. \nОтпаянный СО2-лазер состоит из трех подсистем: \n– излучатель (подсистема 1); \n– система охлаждения (подсистема 2); \n– блок электропитания (подсистема 3). \n\nОтпаянный СО2-лазер состоит из четырех ФМ: \n– ФМ1 – газоразрядная трубка (рабочее тело v1 – смесь газов в газоразрядной трубке, рабочее тело v2 – стенки трубки); \n– ФМ2 – рубашка охлаждения (рабочее тело v4 – охлаждающая жидкость); \n– ФМ3 – регенератор (рабочее тело v3 – вещество регенератора Cu2O); \n– ФМ4 – электроды (рабочее тело v5 – анод и рабочее тело v6 – катод). "
    const STRUCTURE_SCHEME_DESCRIPTION = STRUCTURE_SCHEME_DESCRIPTION_EN
    const [value, setValue] = React.useState('1');
    const [value2, setValue2] = React.useState('1');
    const [valueSubTab, setValueSubTab] = React.useState('1');

    const handleChange0 = (event, newValue) => {
        setValue(newValue.toString());
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeTab = (event, newValue) => {
        setValueSubTab(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const subPagesSchemesRu = ['Иерархическая Схема', 'Структурная Схема', 'Граф модели ФПД 1', 'Граф модели ФПД 2',];
    const subPagesSchemesEn = ['Hierarchical', 'Structure', 'Graph POP-1 model', 'Graph POP-2 model',];
    const subPagesSchemes = subPagesSchemesEn
    const subPagesLinksSchemes = ['hierarchicalScheme', 'structureScheme', 'scheme1', 'scheme2',]

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
            img: '/images/schemesDefault/Иерархическая_схема_отпаяный_лазер.png',
            title: 'Иерархическая Схема',
            description: "Иерархическая Схема ",
        },
        {
            img: '/images/schemesDefault/Структурная_схема_отпаяный_лазер.png',
            title: 'Структурная Схема',
            description: STRUCTURE_SCHEME_DESCRIPTION,
        },
        {
            img: '/images/schemesDefault/Модель_ФПД_Отпаяный_Лазер_1.png',
            title: 'Модель ФПД 1',
            description: "Модель ФПД 1",
        },
        {
            img: '/images/schemesDefault/Модель_ФПД_отпаяный_лазер_2.png',
            title: 'Модель ФПД 2',
            description: "Модель ФПД 1",
        },

    ];


    const headers_ru = ["Схемы", "Схемы", "Description", "Табличное представление граф-схемы", "Словесное описание схемы"]
    const headers_en = ["Schemas", "Schemas", "Description", "Table graph description", "Scehma description"]
    const HEADERS = headers_en

    const buttons_ru = ["Созранить"]
    const buttons_en = ["SAVE"]
    const buttons = buttons_en

    return (
        <Box sx={{
            display: 'flex', flexWrap: 'wrap',
            maxWidth: '100%', maxHeight: '100%'
        }} >

            <div>
                <h2>{headers_en[0]}</h2>
            </div>

            <Grid container rowSpacing={10} columnSpacing={2}>
                <Grid item xs={12}>

                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                {subPagesSchemes.map((_, index) => (
                                    <Tab
                                        key={index}
                                        component={Link}
                                        to={subPagesLinksSchemes[index]}
                                        label={subPagesSchemes[index]} value={subPagesLinksSchemes[index]} />
                                ))}
                            </TabList>
                        </Box>
                        {subPagesLinksSchemes.map((_, index) => (
                            <TabPanel value={subPagesLinksSchemes[index]}>
                                <Grid sx={{ pt: 1 }} container rowSpacing={10} columnSpacing={2}>
                                    <Grid item xs={6}>
                                        <TabContext value={valueSubTab}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                                    <Tab label={headers_en[1]} value="1" />
                                                    <Tab label={headers_en[2]} value="2" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">
                                                <ImageList sx={{
                                                    width: "100%",
                                                    height: 900,
                                                    transform: 'translateZ(0)',
                                                    display: "block",
                                                }}
                                                    rowHeight={350}
                                                    gap={10}>
                                                    <ImageListItem key={itemDataFPD[index].img} cols={1} rows={1}>
                                                        <img
                                                            srcSet={`${itemDataFPD[index].img}`} //?w=500&h=500&fit=crop&auto=format&dpr=2 2x
                                                            src={`${itemDataFPD[index].img}`}  // ?w=250&h=250&fit=crop&auto=format
                                                            alt={itemDataFPD[index].title}
                                                            loading="lazy"
                                                        />
                                                        <ImageListItemBar
                                                            title={itemDataFPD[index].title}
                                                            position="below"
                                                        />
                                                    </ImageListItem>
                                                </ImageList>
                                            </TabPanel>
                                            <TabPanel value="2">
                                            {headers_en[3]}
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
                                            <h2>{headers_en[4]} </h2>
                                            <Divider orientation="vertical" variant="middle" flexItem />

                                            <SaveButton labelName={buttons[0]}>xxxx</SaveButton>
                                        </Stack>


                                        <TextField
                                            id="filled-multiline-static"
                                            //label="Описание устройства"
                                            multiline
                                            rows={30}
                                            fullWidth
                                            defaultValue={"xxx"}
                                            variant="filled"
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
                                                    fontSize: 30,
                                                    fontWeight: 600,
                                                    letterSpacing: 1,
                                                    lineHeight: '30px',
                                                    //left: "5rem",

                                                }
                                            }} // font size of input label
                                            value={itemDataFPD[index].description}
                                        />
                                    </Grid>
                                    <Divider orientation="horizontal" variant="middle" flexItem />
                                </Grid>
                            </TabPanel>
                        ))}


                    </TabContext>

                </Grid>

            </Grid>




        </Box>



    )
}

