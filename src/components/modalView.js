import React from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";

const ModalView = ({ onClose }) => {
  return (
    <Dialog open onClose={onClose} >
      <DialogContent sx={{ backgroundColor: "rgb(53, 8, 8)" }}>
        <Typography variant="h4" component="div" color="white">
          Thanks for showing interest!
        </Typography>
        <Typography variant="body1" color="white">
          We appreciate your support and look forward to serving you. Stay tuned
          for updates and exciting offers.
        </Typography>
        <br/>
        <Button variant="contained" onClick={onClose} style={{ backgroundColor: "white", color: "rgb(53, 8, 8)" }}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalView;
