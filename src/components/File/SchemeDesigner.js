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

    const headers_ru = ["Модель физического принципа действия (ФПД)", "Схемы проекта:", "Конструктор диаграмм", "Название схемы" ]
    const headers_en = ["Physical Operating Principle (POP)", "Project schemas", "Diagram Desgner", "Shema name"]
    const headers = headers_en

    const buttonLabelsRu = ["Создать", "Сохранить", "Загрузить граф ФПД", "Скачать граф"]
    const buttonLabelsEn  = ["Create", "Save", "Upload POP schema", "Download schema" ]
    const buttonLabels = buttonLabelsEn

    return (

        <Box
            component="form"
            sx={{
                //width: 500,
                //height: "200",
                maxWidth: '95%',
                marginTop: "2rem",
            }}
            noValidate
            autoComplete="off"
        >

            <h2>{headers[0]}</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={6} >
                        <Typography
                            variant="h5"
                            component="div">
                            {headers[1]}
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
                                        <ListItemText primary={row.name}
                                        primaryTypographyProps={{ fontSize: 16 }}/>
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
                                <TextField id="outlined-basic" label={headers[3]} variant="outlined"
                                    fullWidth
                                    value={schemeName}
                                    onChange={e => setSchemeName(e.target.value)}
                                    inputProps={{
                                        sx: {
                                            fontSize: 20,
                                            fontWeight: 500,
                                            lineHeight: '30px',
                                        }
                                    }} // font size of input text
                                    InputLabelProps={{
                                        shrink: true,
                                        sx: {
                                            fontSize: 30,
                                            fontWeight: 600,
                                            letterSpacing: 1,
                                            lineHeight: '30px',
                                            //left: "5rem",

                                        }
                                    }} // font size of input label
                                     />

                                <AddButton onPress={addSchema} name={buttonLabels[0]}></AddButton>
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
                                    <InputFileUpload fileName={buttonLabels[2]}> </InputFileUpload>
                                    <DownloadFile fileName={buttonLabels[3]}></DownloadFile>
                                </Stack>


                            </Grid>
                            <Grid justifyContent="flex-end" item xs={6}>

                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                    spacing={2}
                                >
                                    <SaveButton labelName={buttonLabels[1]} >  </SaveButton>
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

