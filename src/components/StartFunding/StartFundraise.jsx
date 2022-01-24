import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/style.module.css";

export default function StartFundraise() {
  return (
    <div className={styles.startfundRaise}>
      <h1>Hi there, who are you fundraising for?</h1>

      <Link to="/raiseindividual" className={styles.item}>
        <UserOutlined />
        <span>Yourself or someone else</span>
      </Link>
      <Link to="/" className={styles.item}>
        <HomeOutlined />
        <span>A charity</span>
      </Link>
    </div>
  );
}
