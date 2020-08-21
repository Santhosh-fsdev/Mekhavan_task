import React from "react"

import image from "../images/logo.png"

const styles = {
  header:{
    display:"flex",
    marginTop:"-5rem",
    marginLeft:"4rem",
    
  },
  title_div:{
      margin:"1.5rem",
      textAlign:"center"
      
  },
  title:{
    fontWeight:800,
    fontSize:"24px",
    marginLeft:"-1rem",
    color:"#ed1c24"
  }
}
export default function Rightcontent() {
  return (
      <div className="header" style={styles.header}>
        <div>
          <img src={image} alt="Mekvahan" />
        </div>
        <div style={styles.title_div}>
          <h6 style={styles.title}>MEKVAHAN</h6>
        </div>
      </div>
  );
}
