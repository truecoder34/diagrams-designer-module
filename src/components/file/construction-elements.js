import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';

import TextField from '@mui/material/TextField';
import { FormLabel, FormControl, FormGroup, Divider } from '@mui/material';



import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function ConstructionElements() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(number, name, description) {
        return { number, name, description };
    }


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }} >

            <div>
                <h2>Конструктивные элементы</h2>
            </div>

            <Grid container rowSpacing={1} columnSpacing={2}>

                {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
                <Grid item xs={12}>
                    {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
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
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <TextField
                            id="outlined-patent-name-input"
                            label="Номер патента"
                            autoComplete="current-patent-name"
                        />
                    </Stack>
                </Grid>
                
                <Grid item xs={12}>
                    
                    xxx
                </Grid>
                
            </Grid>
        </Box>



    )
}

