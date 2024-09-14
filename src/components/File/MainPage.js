import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function MainPage() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(number, name, description) {
        return { number, name, description };
    }

    const HEADERS_RU = ["Сценарий работы пользователя с системой", "Инструкция",]
    const HEADERS_EN = ["Construction elements list", "Name", ]
    const HEADERS = HEADERS_EN

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

            <h2>{HEADERS[0]}</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}> 
                <TextField
                        id="filled-multiline-static"
                        label={HEADERS[1]}
                        multiline
                        rows={20}
                        fullWidth
                        //defaultValue={defaultText}
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
        </Box>



    )
}

