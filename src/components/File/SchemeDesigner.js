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


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchemaIcon from '@mui/icons-material/Schema';



import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DiagramsDesigner from '../DiagramsDesigner';
import InputFileUpload from '../SubComponents/UploadFile';
import SaveButton from '../SubComponents/SaveButton';
import AddButton from '../SubComponents/AddButton';
import DeleteButton from '../SubComponents/DeleteButton';

import DeleteIcon from '@mui/icons-material/Delete';

export default function SchemeDesigner() {
    const schemasStorageInitial = [];           // { name: "FileSchema" }
    const [listStorage, setListStorage] = React.useState(schemasStorageInitial);
    const [schemeName, setSchemeName] = React.useState('');

    const [activeSchemeName, setActiveSchemeName] = React.useState('');


    const addSchema = (event) => {
        event.preventDefault();
        const newListStorage = listStorage.concat({
            name: schemeName + ".fpd"
        });
        setListStorage(newListStorage);

        setActiveSchemeName(schemeName + ".fpd");
        setSchemeName("");
        console.log("[INFO] : new schema file created ", schemeName, 
        "; Current quantity of schemas: ", newListStorage.length,
        "; Active schema name ", schemeName + ".fpd");
    };

    const deleteSchema = (schemeName) => {
        //event.preventDefault();
        let localListStorage = listStorage;
        console.log("Current list storage ", listStorage) 
        for (let i=0; i < localListStorage.length; i++) {
            if (localListStorage[i].name === schemeName) {
                localListStorage.splice(i, 1);
            }
        }

        setListStorage(localListStorage);
        console.log("New list storage ", localListStorage)

    };

    const activeSchema = (schemeName) => {
        //console.log(event)
        setActiveSchemeName(schemeName + ".fpd");
        setSchemeName(schemeName)
        console.log("[DEBUG]: active scheme new : ", schemeName)
    };


    return (

        <Box
            component="form"
            sx={{
                //width: 500,
                //height: "200",
                maxWidth: '95%',
            }}
            noValidate
            autoComplete="off"
        >

            <h2>Модель физического принципа действия (ФПД)</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={6} >
                        <Typography
                            // sx={{ mt: 4, mb: 2 }} 
                            variant="h6"
                            component="div">
                            Схемы в работе:
                        </Typography>
                        <List
                            sx={{
                                maxHeight: 200,
                                overflow: 'auto'
                            }} 
                        >
                            {listStorage.map((row) => (
                                <ListItem disablePadding key={row.name}>
                                    <ListItemButton onClick={() => activeSchema(row.name)}>
                                        <ListItemIcon>
                                            <SchemaIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={row.name} />
                                    </ListItemButton>
                                    <ListItemIcon>
                                            <DeleteIcon onClick={() => deleteSchema(row.name)} />
                                    </ListItemIcon>
                                </ListItem>

                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={6} container rowSpacing={1} columnSpacing={4}>
                        <Grid item xs={12}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <TextField id="outlined-basic" label="Название схемы" variant="outlined"
                                    fullWidth
                                    value={schemeName}
                                    onChange={e => setSchemeName(e.target.value)} />

                                <AddButton onPress={addSchema}></AddButton>
                            </Stack>

                        </Grid>

                        <Grid
                            container rowSpacing={1} columnSpacing={2}
                            item xs={12}>

                            <Grid item xs={3}><InputFileUpload fileName={"Загрузить граф ФПД"}> </InputFileUpload> </Grid>
                            <Grid item xs={3}><SaveButton >  </SaveButton> </Grid>
                            <Grid item xs={6}>
                                {/* <DeleteButton labelName="Удалить"></DeleteButton>  */}
                            </Grid>

                        </Grid>

                    </Grid>
                    {/* </Grid> */}



                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>
                    <DiagramsDesigner />
                </Grid>
            </Grid>





        </Box>




    )
}

