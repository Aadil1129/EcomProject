import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function Final(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = e => {
    e.preventDefault();
    if (props.contact === "" || props.location === "") {
      setOpen(false);
      props.require("Please fill out all required fields");
    } else if (props.contact.length > 10 || props.contact.length < 10) {
      setOpen(false);
      props.require("Length of contact must be 10");
    } else if (props.location.length < 3) {
      props.require("Length of location must be more than 2");
    } else {
      setOpen(true);
      props.require("");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ margin: "auto" }}>
      <Button
        style={{ fontWeight: "bold" }}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        SUBMIT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="final-heading">
          <DialogContentText
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "lightcoral",
              padding: "2rem",
            }}
            id="alert-dialog-description"
          >
            You Ordered Successfully
            <br />
            <span style={{ color: "#1975d2", fontSize: "4rem" }}>
              !THANK YOU{" "}
            </span>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
