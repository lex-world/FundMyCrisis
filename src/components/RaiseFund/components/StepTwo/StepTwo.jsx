import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function StepTwo({ setCount }) {
  return (
    <div className="stepTwo__container">
      <Button onClick={() => setCount(1)}>Back</Button>

      <h1>Set your fundraising goal</h1>

      <div className="title">How much would you like to raise?</div>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          // value={values.amount}
          // onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">฿</InputAdornment>}
          label="Amount"
        />
      </FormControl>

      <Button onClick={() => setCount(3)} className="nextBtn">
        Next
      </Button>
    </div>
  );
}
