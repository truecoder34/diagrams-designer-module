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

            <h2>Начальная страница</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}> 
                <TextField
                        id="filled-multiline-static"
                        label="Инструкция"
                        multiline
                        rows={20}
                        fullWidth
                        //defaultValue={defaultText}
                        variant="filled"
                    />
                
                </Grid>
            </Grid>
        </Box>



    )
}

