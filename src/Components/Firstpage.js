import React from "react"

//Components
import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"
import Form from "./Form"

//css files

import"./Firstpage.css"

function Firstpage() {
  return (
    <>
      <div className="flex-container">
        <div style={{width:"40%"}} >
          <Leftcontent />
        </div>
        <div style={{margin:"7rem 7rem 1rem 7rem"}}>
          <Rightcontent />
          <br />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Firstpage;
