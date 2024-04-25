import { Fab, Grid, Modal, Tooltip } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { Add as AddIcon } from "@mui/icons-material";
import { reducerExample, initialState } from "./reducerExample";
import Form from "./Form"

const Add = () => {
    const [open, setOpen] = useState(false);

    const [state, dispatch] = useReducer(reducerExample, initialState);

    return (
        <>
            <Tooltip onClick={() => setOpen(true)}
                title="Post a dorm review!"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20, // Adjust to position it to the bottom right corner
                    zIndex: 9999, // Ensure it's above other elements
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        position: 'absolute',
                        width: 600, // Adjust as needed
                        height: 600, // Adjust as needed
                        backgroundColor: 'white',
                        borderRadius: 4,
                        boxShadow: 24,
                        p: 4,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Grid item>
                        <Form/>
                    </Grid>
                </Grid>
            </Modal>
        </>
    );
}

export default Add;
