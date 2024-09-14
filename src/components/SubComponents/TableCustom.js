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
    const TABLE_HEADERS_RU = ["#", "Имя", "Тип", "Размеры", "Верхний И.", "Нижний И."]
    const TABLE_HEADERS_EN = ["#", "Name", "Type", "Size", "Upper Idx", "Lower Idx"]
    const TABLE_HEADERS = TABLE_HEADERS_EN

    const listStorage = [];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    {/* {headers.map((row) => (
                            
                            ))} */}
                    <TableRow>
                        <TableCell>{TABLE_HEADERS[0]}</TableCell>
                        <TableCell align="right"> {TABLE_HEADERS[1]}</TableCell>
                        <TableCell align="right">{TABLE_HEADERS[2]}</TableCell>
                        <TableCell align="right">{TABLE_HEADERS[3]}</TableCell>
                        <TableCell align="right">{TABLE_HEADERS[4]}</TableCell>
                        <TableCell align="right">{TABLE_HEADERS[5]}</TableCell>
                        <TableCell align="right">{TABLE_HEADERS[6]}</TableCell>
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