import React from "react";

import image from "../images/logo.png";
import cross from "../images/cross.png";

import { message } from "antd";

const styles = {
  header: {
    display: "flex",
    marginTop: "-5rem",
    marginLeft: "4rem",
  },
  title_div: {
    margin: "1.5rem",
    textAlign: "center",
  },
  title: {
    fontWeight: 800,
    fontSize: "24px",
    marginLeft: "-1rem",
    color: "#ed1c24",
  },
};

const warning = () => {
  message.warning("You cant close this!!");
};

export default function Rightcontent() {
  return (
    <>
      <div
        style={{
          width: "20px",
          height: "20px",
          float: "right",
          marginTop: "-8rem",
          marginRight: "-5rem",
          cursor: "pointer",
        }}
      >
        <img onClick={() => warning()} src={cross} alt="cross" />
      </div>
      <div className="header" style={styles.header}>
        <div>
          <img src={image} alt="Mekvahan" />
        </div>
        <div style={styles.title_div}>
          <h6 style={styles.title}>MEKVAHAN</h6>
        </div>
      </div>
    </>
  );
}
