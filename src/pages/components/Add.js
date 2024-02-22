import { Fab, Grid, IconButton, Modal, Tooltip } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { Add as AddIcon } from "@mui/icons-material";
import { reducerExample, initialState } from "./reducerExample";

const Add = () => {
  const [open, setOpen] = useState(false);

  const [state, dispatch] = useReducer(reducerExample, initialState);

  const handleBackdropClick = (event) => {
    // Check if the click occurred outside the modal content
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Open Modal"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
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
        onClick={handleBackdropClick}  /* Handle click on the backdrop */
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100vh' }}
        >
          <Grid
            item
            sx={{
              backgroundColor: 'white',
              width: 300,
              height: 300,
              outline: 'none',
              border: '1px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            Hello
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Add;