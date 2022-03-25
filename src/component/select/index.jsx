import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Final from "../final";

export default function Select(props) {
  const [open, setOpen] = useState(false);
  const [Required, setRequired] = useState("");
  const [IContact, setIContact] = useState("");
  const [ILocation, setILocation] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: "auto" }}>
      <Button
        style={{
          margin: "0.5rem auto",
          textAlign: "center",
          fontWeight: "bold",
        }}
        color="primary"
        variant="contained"
        disabled={props.firstName}
        onClick={handleClickOpen}
      >
        Order
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ fontWeight: "bold", fontSize: "16px" }}
          className="dialogue-heading2"
          id="alert-dialog-title"
        >
          FINAL MRP <span style={{ fontSize: "24px" }}>${props.mrp}</span>
        </DialogTitle>
        <div className="order-change">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Your Order
          </div>
          <div
            style={{
              letterSpacing: "2px",
              fontWeight: "bold",
              color: "lightcoral",
            }}
          >
            Quantity{" "}
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              {props.quantity}
            </span>
          </div>
          <div
            style={{
              letterSpacing: "1px",
              fontWeight: "bold",
              margin: "4px auto",
              color: "lightcoral",
            }}
          >
            Price{" "}
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              ${props.mrp}
            </span>
          </div>
          <Button
            style={{ textAlign: "center", fontWeight: "bold" }}
            onClick={handleClose}
            color="primary"
            variant="contained"
            autoFocus
          >
            CHANGE
          </Button>
        </div>

        <Box
          style={{ margin: " auto", padding: "1rem" }}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="number"
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            value={IContact}
            onChange={e => setIContact(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={ILocation}
            onChange={e => setILocation(e.target.value)}
          />
        </Box>
        <div className="requirement">{Required}</div>
        <DialogActions>
          <Final
            quantity={props.quantity}
            price={props.mrp}
            contact={IContact}
            require={setRequired}
            location={ILocation}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
