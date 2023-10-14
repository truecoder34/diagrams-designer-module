import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import axios from 'axios';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default function Tables() {
    const graphStorageInitial = []
    const [listStorage, setListStorage] = React.useState(graphStorageInitial);
    
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };

    const [open1, setOpen1] = React.useState(true);
    const handleClick1 = () => {
      setOpen1(!open1);
    };

    return (
        <div>
             <h1>Схемы и диаграммы</h1> 
            <Grid container spacing={0} justifyContent="flex-start">
                <Grid item xs={3}>
                    <List
                        sx={{ width: '100%', 
                        //maxWidth: 360, 
                        bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            Доступные таблицы граф-схем
                            </ListSubheader>
                        }
                        >
                        <ListItemButton onClick={handleClick1}>
                            <ListItemText primary="Устройство 1" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Структурная схема ..." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemText primary="Устройство 2" />
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Отпаяный CO2-лазер" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Структурная схема отпаянного CO2-лазера" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Модель ФПД отпаянного СО2-лазера для ФМ1" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Модель ФПД отпаянного СО2-лазера для ФМ4" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemText primary="Устройство 4" />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={9}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>            
                            <TableCell>#</TableCell>
                            <TableCell align="right"> ID</TableCell>
                            <TableCell align="right">Имя</TableCell>
                            <TableCell align="right">Тип</TableCell>
                            <TableCell align="right">Размеры</TableCell>
                            <TableCell align="right">Верхний и.</TableCell>
                            <TableCell align="right">Нижний и.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listStorage.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.x} : {row.y}</TableCell>
                                <TableCell align="right">{row.upperIndex}</TableCell>
                                <TableCell align="right">{row.lowerIndex}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
            

            
        </div>
    )
}
