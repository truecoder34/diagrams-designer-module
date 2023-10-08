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
import DiagramsDesigner from '../diagrams-designer';
import InputFileUpload from '../subComponents/upload-file';
import SaveButton from '../subComponents/save-button';

export default function SchemeDesigner() {
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

            <h2>Модель физического принципа действия (ФПД)</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >

                        <InputFileUpload
                            fileName={"Загрузить граф ФПД"}
                        ></InputFileUpload>
                        <SaveButton></SaveButton>
                    </Stack>

                </Grid>
                <Grid item xs={12}>
                    <DiagramsDesigner />
                </Grid>
            </Grid>





        </Box>




    )
}

