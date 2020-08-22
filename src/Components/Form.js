import React, { useState } from "react";

//antd imports
import { Input, Button, Alert, Spin, notification, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

//images
import google_image from "../images/google.png";
import fb_image from "../images/fb.png";

import axios from "axios";
import { useHistory } from "react-router-dom";

const styles = {
  elements: {
    marginBottom: "2rem",
    border: 0,
    borderBottom: "1px solid #ccc",
  },
};

export default function Form() {
  let history = useHistory();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  //login failed notification
  const openNotification = () => {
    const args = {
      message: "Login Failed",
      description:
        "Please check your Mobile number and password. If the problem still persists, contact our team. We would love to help you!.",
      duration: 0,
    };
    notification.open(args);
  };

  //Loogin process
  const submit = (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      mobile,
      password,
    };
    console.log(payload);
    axios({
      method: "post",
      url: "https://mekvahan.com/api/android_intern_task",
      data: payload,
    })
      .then((res) => {
        console.log(res.data.status);
        setLoading(false);
        if (res.data.status === true) {
          setStatus(true);
          setTimeout(() => {
            history.push("/profile"); //redirecting to the profile page
          }, 2000);
        } else {
          openNotification();
        }
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <div style={{ marginLeft: "3rem" }}>
      <Spin spinning={loading}>
        {status && (
          <div> 
            <Alert
              message="Login Successfull...Redirecting"
              type="success"
              showIcon
            />
            <br />
            <br />{" "}
          </div>
        )}
        <Input
          placeholder="10 Digit mobile number"
          style={styles.elements}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          style={styles.elements}
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <a href="/" style={{ textDecoration: "none", color: "orange" }}>
          Forgot Password ?
        </a>
        <br />
        <br />
        <Button
          style={{
            width: "100%",
            background: "#ed1c24",
            color: "#ffffff",
            marginBottom: "1rem",
            borderRadius: "5px",
          }}
          onClick={(e) => submit(e)}
        >
          Login
        </Button>
        <h5 style={{ textAlign: "center", color: "#ccc" }}>
          Don't have an account?{" "}
          <a href="/" style={{ color: "#ed1c24", fontWeight: "800" }}>
            Sign up Now.
          </a>
        </h5>
        <br />
        <hr
          style={{ width: "44%", display: "inline-block", background: "#ccc" }}
        />
        &nbsp;&nbsp;<p style={{ display: "inline-block", color: "#ccc" }}>Or</p>
        &nbsp;&nbsp;
        <hr
          style={{ width: "43%", display: "inline-block", background: "#ccc" }}
        />
        <div style={{ textAlign: "center", color: "#ccc" }}>
          <p>Continue with</p>
          <a href="/">
            <img src={google_image} alt="google" />
          </a>
          <a href="/">
            <img src={fb_image} alt="facebook" />
          </a>
        </div>
      </Spin>
    </div>
  );
}
