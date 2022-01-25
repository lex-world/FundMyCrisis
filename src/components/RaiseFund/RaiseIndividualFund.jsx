import React from "react";
import "./styles/style.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";

export default function RaiseIndividualFund() {
  const [count, setCount] = React.useState(1);

  return (
    <div className="raiseIndividualFund">
      <h1>Step {count} of 3</h1>

      <div className="stepper">
        <div className={`stepperItem ${count >= 1 && "active"}`}></div>
        <div className={`stepperItem ${count >= 2 && "active"}`}></div>
        <div className={`stepperItem ${count >= 3 && "active"}`}></div>
      </div>

      {count === 1 && <StepOne setCount={setCount} />}
      {count === 2 && <StepTwo setCount={setCount} />}
      {count === 3 && (
        <div>
          <h1 style={{fontSize: 25}}>Thank you for your request!</h1>
          <p style={{textAlign: "center", fontSize: 16}}>
            Your cause will be listed shortly on our cause list.
          </p>
        </div>
      )}
    </div>
  );
}
