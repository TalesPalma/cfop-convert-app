import { Autocomplete, Box, Button, TextField } from "@mui/material"
import React from "react"
import './Form.css'


class Form extends React.Component {
    render(): React.ReactNode {

        const options = ["option1", "option2", "option3"];

        return (
            <div className="container-form">
                <Box component={"form"}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div className="body">
                        <TextField
                            required
                            id="filled-required"
                            label="Name"
                            placeholder="Your name"
                            variant="filled"
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Teste autocomplete" />}
                        />
                    </div>
                    <div className="footer">
                        <Button variant="contained">Contained</Button>
                    </div>
                </Box>
            </div>
        )
    }

}

export default Form