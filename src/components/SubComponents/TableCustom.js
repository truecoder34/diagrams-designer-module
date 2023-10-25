import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableCustom({ fileName }) {
    const headers = ['#', 'ID', 'Имя', 'Тип', 'Размеры', 'В. Индекс', 'Н. Индекс',];
    const listStorage = [];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    {/* {headers.map((row) => (
                            
                            ))} */}
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
    );
}