import React, { useState } from 'react';
import {
    BrowserRouter,
    NavLink,
    Routes,
    Route,
    Router,
    Navigate,
    Link,
} from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';
import { Box, Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';


import MainPage from './File/MainPage';
import DeviceInformation from './File/DeviceInformation';
import SchemeDesigner from './File/SchemeDesigner';
import Schemes from './File/Schemes';
import ConstructionElements from './File/ConstructionElements';
import ValueFunctions from './File/ValuesFunctions';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddButton from './SubComponents/AddButton';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';

export default function Results() {
    function createData(number, name) {
        return { number, name };
    }
    const tableStorageInitial = [
        createData(1, 'Тех. Решение 1'),
        createData(2, 'Тех. Решение 2'),
        createData(3, 'Тех. Решение 3'),
        createData(4, 'Тех. Решение 4'),
        createData(5, 'Тех. Решение 5'),
        createData(6, 'Тех. Решение 6'),
    ]
    const [tableStorage, setListStorage] = React.useState(tableStorageInitial);
    const [elementName, setElementName] = useState('');

    const selectRow = (rowName) => {
        setElementName(rowName)
        console.log("[DEBUG]: active scheme new : ", rowName)
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', pl: 4, pr: 4 }}>
            <div>
                <h2>Вывод результатов</h2>
            </div>
            <Grid xs={12} container rowSpacing={1} columnSpacing={2}   >

                <Grid container item xs={6}>
                    <Grid item xs={12} sx={{ mt: 2 }}>

                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <TextField
                                id="filled-number"
                                label="Сформировано техниеских решений"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                value={tableStorage.length}
                            />
                            <Divider orientation="vertical" flexItem />
                            <TextField fullWidth
                                label="Техническое решение" id="baseFunction"
                                value={elementName} onChange={e => setElementName(e.target.value)}
                            />

                        </Stack>

                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell align="center">Название</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableStorage.map((row) => (
                                        <TableRow
                                            hover
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => selectRow(row.name)}
                                        >
                                            <TableCell >
                                                {row.number}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="left" >{row.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>

                    </Grid>

                </Grid>

                <Grid container item xs={6}>
                    B
                </Grid>
            </Grid>

        </Box>
    )
}

