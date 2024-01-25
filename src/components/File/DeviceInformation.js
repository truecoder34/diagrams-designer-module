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
    let defaultText = "Отпаянные СО2-лазеры. Описание конструкции. Наиболее просты и удобны в работе лазеры с отпаянным активным элементом, так как они не требуют подпитки рабочей смеси. Лазеры этого типа широко используются при физических измерениях, в метеорологии, системах связи, локации и т. д. [1]. Они состоят из излучателя и блока питания. Конструкция типичного отпаянного лазера типа ИЛГН приведена на рисунке 2.1. Активный элемент представляет собой стеклянную водоохлаждаемую трубку диаметром 15 мм с резервным баллоном 6 диаметром 90 мм. С одной стороны трубки расположено окно Брюстера из GaAs, а с другой – глухое вогнутое зеркало резонатора 8. Внутри трубки установлен кольцевой анод. Катод размещен в отдельной колбе с регенератором, выполненным в виде полупроводника с положительными вакансиями – Cu2O, который легко адсорбирует кислород при комнатных температурах и десорбирует его при температурах тлеющего разряда (менее 200 °С). Выходное полупрозрачное плоское зеркало резонатора из GaAs 3 расположено на внешнем юcтировочном устройстве 4. Для выделения низшей поперечной моды имеется ирисовая диафрагма 5. Источник питания состоит из повышающего трансформатора, выпрямителя и балластных резисторов."
    let defaultImg = "/images/scheme_CO2_laser.png"
    let defaultImgDescription = "1 – основание; 2 – активный элемент; 3 – стенки газоразрядной трубки; 4 – выходное зеркало резонатора; 5 – узел юстировки резонатора; 6 – диафрагма; 7 – окно Брюстера; 8 – резервный баллон; 9 – рубашка охлаждения;  10 – штуцер подачи охлаждающей жидкости в рубашку охлаждения; 11– глухое зеркало резонатора; 12 – катод; 13 – колба с катодом и регенератором; 14 – вещество регенератора Cu2O; 15 – анод; 16 – штуцер вывода охлаждающей жидкости";


    const [text, setValueText] = React.useState(defaultText);
    const [description, setValueDescripton] = React.useState(defaultImgDescription);

    const cleareAllFields = (event) => {
        setValueText("11");
        setValueDescripton("111");
    };




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
                                    fileName={"Загрузить схему"}
                                ></InputFileUpload>
                                <SaveButton></SaveButton>
                            </Stack>
                        </Grid>
                        <Grid item xs={1}>
                            <DeleteButton labelName="Очистить"
                            // onClick={cleareAllFields()}
                            >
                            </DeleteButton>
                        </Grid>
                    </Grid>


                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="filled-multiline-static"
                        label="Описание устройства"
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
                    <h3>Конструктивная схема</h3>
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
                        label="Описание изображения"
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

