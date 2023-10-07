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
import Chip from '@mui/material/Chip';


import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import ButtonGroup from '@mui/material/ButtonGroup';

import InputFileUpload from '../subComponents/upload-file';
import DeleteButton from '../subComponents/delete-button';
import SaveButton from '../subComponents/save-button';

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


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (


        <Box
            component="form"
            sx={{
                //width: 500,
                maxWidth: '95%',
            }}
            noValidate
            autoComplete="off"
        >
            <h2>Описание устройства</h2>
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
                            <DeleteButton
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <ImageList sx={{ maxWidth: '95%' }} cols={1} rowHeight={450}>

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
                    />
                </Grid>
            </Grid>

        </Box >





    )
}

