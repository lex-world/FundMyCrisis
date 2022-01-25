import React from "react";
import { Button, TextField } from "@mui/material";

import styles from "./style.module.css";

export default function StepOne({ setCount }) {
  const handleClick = () => {
    setCount(2);
  };

  return (
    <div>
      <div className={styles.label}>What's your name?</div>

      <div className={styles.halfContainer}>
        <TextField
          id="outlined-textarea"
          label="First Name"
          placeholder="John"
          multiline
          className={styles.halfText}
        />
        <TextField
          id="outlined-textarea"
          label="Last Name"
          placeholder="Doe"
          multiline
          className={styles.halfText}
        />
      </div>

      <div className={styles.label}>Where do you live?</div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Country"
          className={styles.fullText}
        />
        <TextField
          id="outlined-textarea"
          label="Postcode"
          className={styles.fullText}
        />
      </div>

      <div className={styles.label}>What are you fundraising for?</div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Cause"
          multiline
          rows={4}
          className={styles.description}
        />
      </div>

      <Button onClick={handleClick} className={styles.nextBtn}>
        Next
      </Button>

      <p style={{ textAlign: "center" }}>
        By continuing, you agree to the FundMyCrisis terms and privacy policy.
      </p>
    </div>
  );
}
