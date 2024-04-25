import { Autocomplete, Box, Button, TextField } from "@mui/material"
import React, { useState } from "react"
import './Form.css'


const Form = () => {
        const options = ["option1", "option2", "option3"];

        const [teste,setTeste] = useState('Digite algo no campo Name')

        return (
            <div className="container-form">
                <h1>{teste}</h1>
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
                            onChange={(e) => setTeste(e.target.value)}
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


export default Form