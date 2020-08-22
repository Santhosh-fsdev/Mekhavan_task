import React from 'react'

import {Card} from "antd";

import profile from "../images/profile.png";
const styles = {
    cards: {
      fontWeight: 600,
    }
}
export default function Nav() {
    return (
        <div>
            <Card>
            <img src={profile} alt="profile" style={{ height: "50px" }} />
            &nbsp;
            <div>
              <p
                style={{
                  fontWeight: 800,
                  display: "inline-block",
                  float: "right",
                  margin: "-3rem 0 0 4rem",
                }}
              >
                Hi Mekhavan!
              </p>
            </div>
          </Card>
          <br />
          <Card>
            <span style={styles.cards}>My Profile</span>
          </Card>

          <Card>
            <span style={{color:"#ed1c24",fontSize:"16px",fontWeight:700}}>Manage Address</span>
          </Card>

          <Card>
            <span style={styles.cards}>Change Password</span>
          </Card>
        </div>
    )
}
