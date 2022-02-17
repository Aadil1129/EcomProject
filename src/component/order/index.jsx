import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Paper from "@mui/material/Paper";
import Select from "../select";

export default function Order(props) {
  let newPer = (props.amount * (100 - props.percentage)) / 100;
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [storage, setStorage] = useState("");
  const [percent, setPercent] = useState(newPer);
  const [current, setCurrent] = useState(props.amount);
  const [enableButton, setEnableButton] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancelOrder = () => {
    setOpen(false);
    setAmount(1);
    setCurrent(props.amount);
    setPercent(newPer);
  };
  const AddAmount = () => {
    setAmount(amount + 1);
    let addCur = current;
    setCurrent(addCur + props.amount);
    setPercent(percent + newPer);
    if (amount >= props.Astock) {
      setStorage(`Oops! Sorry Out Of Stock`);
      setEnableButton(true);
    }
  };
  const RemoveAmount = () => {
    let removeCur = current;
    if (amount > 1) {
      setAmount(amount - 1);
      setPercent(percent - newPer);
      setCurrent(removeCur - props.amount);
    }
    if (amount <= props.Astock + 1) {
      setStorage("");
      setEnableButton(false);
    }
  };
  return (
    <>
      <Button
        className="order-button"
        style={{ margin: "2rem ", textAlign: "center", fontWeight: "bold" }}
        variant="contained"
        onClick={handleClickOpen}
      >
        BUY NOW
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ fontWeight: "bold" }}
          className="dialogue-heading"
          id="alert-dialog-title"
        >
          Base Price ${props.amount}
        </DialogTitle>
        <img
          style={{ width: "50%", margin: "1rem auto" }}
          src={props.newImage}
          alt=""
        />
        <div className="popup-heading">
          CURRENT PRICE
          <span style={{ fontSize: "1.5em", color: "red" }}> ${current}</span>
        </div>
        <div className="shirt-amount">
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              autoFocus
              onClick={RemoveAmount}
            >
              <RemoveIcon />
            </Button>
          </DialogActions>

          <Box>
            <Paper
              style={{
                fontSize: "50px",
                margin: "0px 20px",
              }}
              variant="contained"
            >
              {amount}
            </Paper>
          </Box>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              autoFocus
              onClick={AddAmount}
            >
              <AddIcon />
            </Button>
          </DialogActions>
        </div>
        <div className="alert">{storage}</div>
        <div className="popup-heading">
          {props.percentage}% OFF
          <span style={{ fontSize: "1.5em", color: "red" }}> ${percent}</span>
          <span className="offcut"> ${current}</span>
        </div>

        <Select firstName={enableButton} mrp={percent} quantity={amount} />
        <Button
          style={{ margin: "0.5rem auto", fontWeight: "bold" }}
          onClick={cancelOrder}
          color="primary"
          variant="contained"
          autoFocus
        >
          CANCEL
        </Button>
      </Dialog>
    </>
  );
}
