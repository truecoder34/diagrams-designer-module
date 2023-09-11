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

import Grid from '@mui/material/Grid';

export default function QualityMetrics() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        // <Box
        //     sx={{ display: 'flex', flexWrap: 'wrap' }}
        // >
        //     {/* <div> */}
        //     <h2>Введите показатели качества для оценки технических решений</h2>

        //         <FormGroup row sx={{ width: "100%" }} >
        //             <TextField variant="outlined" placeholder="Имя элементарной функции"  />
        //             <Button variant="contained" disableElevation>
        //                 Добавить
        //             </Button>
        //         </FormGroup>

        //     {/* </div> */}
        // </Box>

        <div>
            <h2>Введите показатели качества для оценки технических решений</h2>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}  >
                <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel>
                                <h4>Почередно введите элементарные функции (не более 30)</h4>
                            </FormLabel>
                            <FormGroup row >
                                <Grid item xs={11}>
                                    <TextField fullWidth label="элементарная фунция" id="baseFunction" />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="contained">
                                        Добавить
                                    </Button>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    {/* <Divider /> */}
                    <Grid item xs={12}>
                        www
                    </Grid>
                </Grid>
            </Box>
        </div>


    )
}

