import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Box, Tabs, Tab } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from './SubComponents/AddButton';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function SolutionSearch() {



    const HEADERS_RU = ["Поиск решений", "Проверка наличия исходных данных", "Информация о ходе проверки", "Выделить все", 
        "Показатели качества", "Элементарные функции", "Конструктивные элементы", "Поиск технических решений", "Информация о процесе",
    "Количество обрабытваемых тенических решний", "Количество сформированных списков конструктивных элементов", "Количество"]
    const HEADERS_EN = ["Searching for solutions", "Checking the availability of input data", "Information on the progress of the check", "Select all", 
        "Quality metrics", "Basic functions", "Design elements", "Search for technical solutions", "Process information",
    "Number of processed shadow solutions", "Number of generated lists of design elements", "Count"]
    const HEADERS = HEADERS_EN

    const BUTTONS_RU = ["Проверить", "Сформировать технические решения"]
    const BUTTONS_EN = ["Validate", "Build technical solution"]
    const BUTTONS = BUTTONS_EN

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1], checked[2]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked, checked[2]]);
    };
    const handleChange4 = (event) => {
        setChecked([checked[0], checked[1], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label={HEADERS[4]}
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label={HEADERS[5]}
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={HEADERS[6]}
                control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
            />
        </Box>
    );


    const checkAllData = () => {

    }

    const startSearch = () => {

    }


    return (
        <Box sx={{ width: '100%', typography: 'body1', pl: 4, pr: 4 }}>
            <div>
                <h2>{HEADERS[0]}</h2>
            </div>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                    {HEADERS[1]}
                    </Typography>
                </Grid>
                <Grid container item xs={2}> </Grid>
                <Grid container item xs={4}> </Grid>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mb: 2 }} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Typography sx={{
                        // mt: 4, mb: 2 
                    }} variant="h6" component="div">
                        {HEADERS[2]}
                    </Typography>
                </Grid>
                <Grid container item xs={2}> </Grid>
                <Grid container item xs={4}> </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <div>
                        <FormControlLabel
                            label={HEADERS[3]}
                            control={
                                <Checkbox
                                    checked={checked[0] && checked[1] && checked[2]}
                                    indeterminate={checked[0] !== checked[1] || checked[1] !== checked[2] || checked[0] !== checked[2]}
                                    onChange={handleChange1}
                                />
                            }
                        />
                        {children}
                    </div>
                </Grid>
                <Grid container item xs={1}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </Grid>
                <Grid container item xs={5}>
                    <AddButton onPress={checkAllData} name={BUTTONS[0]}></AddButton>
                </Grid>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mb: 2 }} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                        {HEADERS[7]}
                    </Typography>

                </Grid>
                <Grid container item xs={2}> </Grid>
                <Grid container item xs={4}> </Grid>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mb: 2 }} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                </Grid>
            </Grid>

            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6" component="div">
                        {HEADERS[8]}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <LinearProgress />
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>


            <Grid xs={12} container rowSpacing={1} columnSpacing={2}>
                <Grid container item xs={6}>
                    <Grid sx={{ mt:2 }} item xs={6}>
                        <Typography  variant="h7" component="div"> {HEADERS[9]} </Typography>
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={4}>
                        <TextField
                            id="filled-number"
                            label={HEADERS[11]}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={2}>
                    </Grid>

                    <Grid sx={{ mt:2 }} item xs={6}>
                        <Typography sx={{}} variant="h7" component="div"> {HEADERS[10]}</Typography>
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={4}>
                        <TextField
                            id="filled-number"
                            label={HEADERS[11]}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                    </Grid>
                    <Grid sx={{ mt:2 }} item xs={2}>
                    </Grid>

                </Grid>
                <Grid container item xs={1}>
                    <Divider orientation="vertical" variant="middle" flexItem />
                </Grid>
                <Grid container item xs={5}>
                    <AddButton onPress={checkAllData} name={BUTTONS[1]}></AddButton>
                </Grid>
            </Grid>
        </Box>
    )
}

