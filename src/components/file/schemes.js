import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Box, Tabs, Tab, dividerClasses } from '@mui/material';

import TextField from '@mui/material/TextField';
import { FormLabel, FormControl, FormGroup, Divider } from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


export default function Schemes() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(number, name, description) {
        return { number, name, description };
    }

    function srcset(image, width, height, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${width * cols}&h=${
            height * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
      

    const itemData = [
        {
            img: '/images/schemesDefault/Структурная_схема_отпаяный_лазер.png',
            title: 'Структурная схема',
            featured: true,
        },
        {
            img: '/images/schemesDefault/Иерархическая_схема_отпаяный_лазер.png',
            title: 'Иерархическая схема',
            featured: true,
        }
    ];

    const itemDataFPD = [
        {
            img: '/images/schemesDefault/Модель_ФПД_Отпаяный_Лазер_1.png',
            title: 'Модель ФПД 1',
        },
        {
            img: '/images/schemesDefault/Модель_ФПД_отпаяный_лазер_2.png',
            title: 'Модель ФПД 2',
        },
    ];

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }} >

            <div>
                <h2>Схемы</h2>
            </div>



            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>

                    <ImageList sx={{
                        width: "100%",
                        height: 700,
                        // Promote the list into its own layer in Chrome. 
                        // This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                        rowHeight={200}
                        gap={10}>

                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={1} rows={itemData.length}>
                                <img
                                    srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=500&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>

                </Grid>

                <Grid item xs={12}>
                <ImageList sx={{
                        width: "100%",
                        height: 600,
                        // Promote the list into its own layer in Chrome. 
                        // This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                        rowHeight={200}
                        gap={10}>

                        {itemDataFPD.map((item) => (
                            <ImageListItem key={item.img} cols={1} rows={itemDataFPD.length}>
                                <img
                                    srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=500&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>

            </Grid>
        </Box>



    )
}

