import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default function StartFundraise() {
  return (
    <div className="startfundRaise">
      <h1>Hi there, who are you fundraising for?</h1>

      <Link to="/raiseindividual" className="item">
        <UserOutlined />
        <span>Yourself or someone else</span>
      </Link>
      <Link to="/" className="item">
        <HomeOutlined />
        <span>A charity</span>
      </Link>
    </div>
  );
}
