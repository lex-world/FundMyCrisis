import React from "react";
import { Link } from "react-router-dom";
import './styles/style.css';

export default function QuickStart() {
  return (
    <div>
      <div className="landing">
      <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Funding"
        />

        <div className="landingContent">
          <h1>Trusted fundraising for all of life's moments.</h1>
          <p>
            FundMyCrisis is a decentralized platform for crowdfunding and
            crowdfunding-related services. Get help. Give kindness. Start in
            just 5 minutes.
          </p>
          <Link to="/startraise">Start FundMyCrisis</Link>
        </div>
      </div>
    </div>
  );
}
