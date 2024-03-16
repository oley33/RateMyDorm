import { Fab, Grid, Modal, Tooltip } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { Add as AddIcon } from "@mui/icons-material";
import { reducerExample, initialState } from "./reducerExample";

const Add = () => {
    const [open, setOpen] = useState(false);

    const [state, dispatch] = useReducer(reducerExample, initialState);

    return (
        <>
            <Tooltip onClick={() => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50%-25px)", md: 30 }
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
                        Tony's Post Content Goes Here
                    </Grid>
                </Grid>
            </Modal>
        </>
    );
}

export default Add;
