import React,{useState} from "react";

import { Input } from "antd";
import { Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import google_image from "../images/google.png";
import fb_image from "../images/fb.png";

import axios from "axios"

const styles = {
  elements: {
    marginBottom: "2rem",
    border: 0,
    borderBottom: "1px solid #ccc",
  },
};
export default function Form() {
  const [mobile,setMobile] = useState("");
  const [password,setPassword] = useState("");

  const submit = (e) =>{
    e.preventDefault();

    const payload = {
        mobile,
        password
    }
    console.log(payload);
      axios({
        method:"post",
        url:"https://mekvahan.com/api/android_intern_task",
        data:payload
      })
      .then((res) => {
        console.log(res.data)
        if(res.data){
          window.alert(res.data.status)
        }
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <div style={{ marginLeft: "3rem" }}>
      <Input placeholder="10 Digit mobile number" style={styles.elements} onChange={(e)=>setMobile(e.target.value)}/>
      <Input.Password
       onChange={(e)=>setPassword(e.target.value)}
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
        onClick={(e)=>submit(e)}
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
        <a href="/" ><img src={google_image} alt="google" /></a>
        <a href="/"><img src={fb_image} alt="facebook" /></a>
      </div>
    </div>
  );
}
