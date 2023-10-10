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
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import DiagramsDesigner from '../diagrams-designer';
import InputFileUpload from '../subComponents/upload-file';
import SaveButton from '../subComponents/save-button';
import AddButton from '../subComponents/add-button';

export default function SchemeDesigner() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(number, name, description) {
        return { number, name, description };
    }

    const schemasStorageInitial = [{ name: "FileSchema" }]
    const [listStorage, setListStorage] = React.useState(schemasStorageInitial);
    const [schemeName, setSchemeName] = React.useState('');


    // const handleSubmitButton = (event) => {
    //     console.log(schemeName)
    //     event.preventDefault();
    //   }

    const addSchema = (event) => {
        event.preventDefault()
        console.log(schemeName)
        const newListStorage = listStorage.concat({
            name: schemeName
        });
        setListStorage(newListStorage);
        console.log(newListStorage);
    };


    return (

        <Box
            component="form"
            sx={{
                //width: 500,
                maxWidth: '95%',
            }}
            noValidate
            autoComplete="off"
        >

            <h2>Модель физического принципа действия (ФПД)</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} container rowSpacing={1} columnSpacing={2} >
                    <Grid item xs={6}>
                        <List>
                            {listStorage.map((row) => (

                                <ListItem disablePadding key={row.name}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={row.name} />
                                    </ListItemButton>
                                </ListItem>

                            ))}

                        </List>
                    </Grid>
                    <Grid item xs={6} container rowSpacing={1} columnSpacing={4}>

                        <Grid item xs={12}>
                            {/* <form onSubmit={handleSubmitButton}> */}
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <TextField id="outlined-basic" label="Название схемы" variant="outlined"
                                    value={schemeName}
                                    onChange={e => setSchemeName(e.target.value)} />

                                {/* <AddButton onClick={addSchema}></AddButton> */}
                                <Button component="label"
                                    onClick={addSchema}
                                    variant="contained" color="success" >
                                    Создать
                                </Button>

                            </Stack>
                            {/* </form> */}
                        </Grid>

                        <Grid item xs={12}>
                            <InputFileUpload fileName={"Загрузить граф ФПД"}> </InputFileUpload>
                            <SaveButton >  </SaveButton>
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

