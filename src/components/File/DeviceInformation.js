import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { styled } from '@mui/material/styles';

import InputFileUpload from '../SubComponents/UploadFile';
import DeleteButton from '../SubComponents/DeleteButton';
import SaveButton from '../SubComponents/SaveButton';


export default function DeviceInformation() {
    const defaultTextRu = "Отпаянные СО2-лазеры. Описание конструкции. Наиболее просты и удобны в работе лазеры с отпаянным активным элементом, так как они не требуют подпитки рабочей смеси. Лазеры этого типа широко используются при физических измерениях, в метеорологии, системах связи, локации и т. д. [1]. Они состоят из излучателя и блока питания. Конструкция типичного отпаянного лазера типа ИЛГН приведена на рисунке 2.1. Активный элемент представляет собой стеклянную водоохлаждаемую трубку диаметром 15 мм с резервным баллоном 6 диаметром 90 мм. С одной стороны трубки расположено окно Брюстера из GaAs, а с другой – глухое вогнутое зеркало резонатора 8. Внутри трубки установлен кольцевой анод. Катод размещен в отдельной колбе с регенератором, выполненным в виде полупроводника с положительными вакансиями – Cu2O, который легко адсорбирует кислород при комнатных температурах и десорбирует его при температурах тлеющего разряда (менее 200 °С). Выходное полупрозрачное плоское зеркало резонатора из GaAs 3 расположено на внешнем юcтировочном устройстве 4. Для выделения низшей поперечной моды имеется ирисовая диафрагма 5. Источник питания состоит из повышающего трансформатора, выпрямителя и балластных резисторов."
    const defaultTextEn = "Desoldered CO2 lasers. Design description. Lasers with a soldered active element are the simplest and most convenient in operation, as they do not require feeding of the working mixture. Lasers of this type are widely used in physical measurements, meteorology, communication systems, location, etc. [1]. They consist of an emitter and a power supply. The design of a typical soldered laser of the ILGN type is shown in Figure 2.1. The active element is a glass water-cooled tube of 15 mm diameter with a reserve cylinder 6 of 90 mm diameter. On one side of the tube is a Brewster window made of GaAs and on the other side is a blind concave resonator mirror 8. A circular anode is placed inside the tube. The cathode is placed in a separate flask with a regenerator made in the form of a semiconductor with positive vacancies - Cu2O, which easily adsorbs oxygen at room temperatures and desorbs it at glow discharge temperatures (less than 200 °C). The output semi-transparent flat mirror of the GaAs resonator 3 is located on the external alignment device 4. An iris diaphragm 5 is available to isolate the lowest transverse mode. The power supply consists of a step-up transformer, a rectifier and ballast resistors."
    const defaultText = defaultTextEn

    let defaultImg = "/images/scheme_CO2_laser.png"
    const defaultImgDescriptionRu = "1 – основание; 2 – активный элемент; 3 – стенки газоразрядной трубки; 4 – выходное зеркало резонатора; 5 – узел юстировки резонатора; 6 – диафрагма; 7 – окно Брюстера; 8 – резервный баллон; 9 – рубашка охлаждения;  10 – штуцер подачи охлаждающей жидкости в рубашку охлаждения; 11– глухое зеркало резонатора; 12 – катод; 13 – колба с катодом и регенератором; 14 – вещество регенератора Cu2O; 15 – анод; 16 – штуцер вывода охлаждающей жидкости";
    const defaultImgDescriptionEn = "1 - base; 2 - active element; 3 - walls of the gas-discharge tube; 4 - output mirror of the resonator; 5 - resonator alignment unit; 6 - diaphragm; 7 - Brewster window; 8 - reserve cylinder; 9 - cooling jacket;  10 - coolant supply connection to the cooling jacket; 11 - blind mirror of the resonator; 12 - cathode; 13 - flask with cathode and regenerator; 14 - regenerator substance Cu2O; 15 - anode; 16 - coolant outlet connection.";
    const defaultImgDescription = defaultImgDescriptionEn

    const [text, setValueText] = React.useState(defaultText);
    const [description, setValueDescripton] = React.useState(defaultImgDescription);

    const cleareAllFields = (event) => {
        setValueText("11");
        setValueDescripton("111");
    };



    const buttonsRu = ["Загрузить схему", "Сохранить", "Очистить"]
    const buttonsEn = ["Upload scheme", "Save", "Clean"]
    const buttons = buttonsEn

    return (


        <Box
            component="form"
            sx={{
                //width: 500,
                maxWidth: '95%',
                marginTop: "2rem",
            }}
            noValidate
            autoComplete="off"
        >
            {/* <h2>Описание устройства</h2> */}
            {/* <Grid container rowSpacing={2} columnSpacing={2}>

            </Grid> */}
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <InputFileUpload
                                    fileName={buttons[0]}
                                ></InputFileUpload>
                                <SaveButton labelName={buttons[1]}></SaveButton>
                            </Stack>
                        </Grid>
                        <Grid item xs={1}>
                            <DeleteButton labelName={buttons[2]}
                            // onClick={cleareAllFields()}
                            >
                            </DeleteButton>
                        </Grid>
                    </Grid>


                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="filled-multiline-static"
                        label= "Device description"
                        // label="Описание устройства"
                        multiline
                        rows={8}
                        fullWidth
                        defaultValue={defaultText}
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
                                //top: "1rem",
                                //left: "5rem",
                            }
                        }} // font size of input label
                    />
                </Grid>
                <Grid item xs={12}>
                    {/* <h3>Конструктивная схема</h3> */}
                    <h3>Schem</h3>
                    <ImageList sx={{ maxWidth: '95%' }} cols={1} rowHeight={550}>

                        <ImageListItem>
                            <img
                                srcSet={`${defaultImg}`}
                                src={`${defaultImg}`}
                                alt="default"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="filled-multiline-static"
                        // label="Описание изображения"
                        label="Image description"
                        multiline
                        rows={5}
                        fullWidth
                        defaultValue={defaultImgDescription}
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
                                //top: "1rem",
                                //left: "5rem",
                            }
                        }} // font size of input label
                    />
                </Grid>
            </Grid>

        </Box >





    )
}

