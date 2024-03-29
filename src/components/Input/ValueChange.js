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

export default function ValueChange() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(number, name, description) {
        return { number, name, description };
    }



    return (

        <div>
            <h2>Редактирование значений</h2>
            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}  >
                <Grid container rowSpacing={1} columnSpacing={2}   >
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel>
                                <h4>Почередно введите показатели качества для оценки технических решений (не более 7)</h4>
                            </FormLabel>
                            <br/>
                            <FormGroup row >
                                <Grid item xs={11}>
                                    <TextField fullWidth
                                        label="показатели качества" id="baseFunction"
                                        value={elementName} onChange={e => setElementName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="contained" color='primary' size="large"
                                        onClick={() => addRow()}
                                    >
                                        Добавить
                                    </Button>
                                </Grid>
                            </FormGroup>
                            <br/>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            // divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <h4>Введено показателей качества :</h4> 
                            <Divider orientation="vertical" flexItem />
                            <Chip label={elementCount}  />
                            
                        </Stack>
                        <br/>
                    </Grid>

                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
                                        <TableCell align="center">Дополнительная информация</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableStorage.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell >
                                                {row.number}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box> */}
        </div>


    )
}

