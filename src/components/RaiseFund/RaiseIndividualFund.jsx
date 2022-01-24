import React from "react";
import styles from "./styles/style.module.css";
import StepOne from "./components/StepOne";

export default function RaiseIndividualFund() {
  const [count, setCount] = React.useState(1);
  return (
    <div className={styles.raiseIndividualFund}>
      <h1>Step {count} of 5</h1>

      <div className={styles.stepper}>
        <div className={styles.stepperItem}></div>
        <div className={styles.stepperItem}></div>
        <div className={styles.stepperItem}></div>
        <div className={styles.stepperItem}></div>
        <div className={styles.stepperItem}></div>
      </div>

      <StepOne/>
    </div>
  );
}
