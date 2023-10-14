import React, { useState } from 'react';

import axios from 'axios';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
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
import DownloadFile from '../SubComponents/DownloadFile';
import SaveButton from '../SubComponents/SaveButton';
import AddButton from '../SubComponents/AddButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SchemeDesigner() {
    const schemasStorageInitial = [];           // { name: "FileSchema" }
    const [listStorage, setListStorage] = React.useState(schemasStorageInitial);
    const [schemeName, setSchemeName] = React.useState('');



    const addSchema = (event) => {
        event.preventDefault();
        const newListStorage = listStorage.concat({
            name: schemeName + ".fpd"
        });
        setListStorage(newListStorage);
        setSchemeName("");

        console.log("[INFO] : new schema file created ", schemeName,
            "; Current quantity of schemas: ", newListStorage.length,
            "; Active schema name ", schemeName + ".fpd");
    };

    const deleteSchema = (schemeName) => {
        let localListStorage = [...listStorage];
        console.log("Current list storage ", listStorage)
        for (let i = 0; i < localListStorage.length; i++) {
            if (localListStorage[i].name === schemeName) {
                localListStorage.splice(i, 1);
            }
        }

        setListStorage(localListStorage);
        console.log("New list storage ", localListStorage)

    };

    const selectSchema = (schemeName) => {
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
                            Схемы проекта:
                        </Typography>
                        <List
                            sx={{
                                maxHeight: 200,
                                overflow: 'auto'
                            }}
                        >
                            {listStorage.map((row, index) => (
                                <ListItem disablePadding key={row.name}>
                                    <ListItemButton onClick={() => selectSchema(row.name)}>
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

                            <Grid justifyContent="flex-start" item xs={6}>

                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={2}
                                >
                                    <InputFileUpload fileName={"Загрузить граф ФПД"}> </InputFileUpload>
                                    <DownloadFile fileName={"Cкачать граф"}></DownloadFile>
                                </Stack>


                            </Grid>
                            <Grid justifyContent="flex-end" item xs={6}>

                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                    spacing={2}
                                >
                                    <SaveButton >  </SaveButton>
                                </Stack>
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

