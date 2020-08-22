import React, { useState } from "react";

//antd imports
import { Layout, Card, Button, Modal, Input, Row, Col, message } from "antd";

//image imports 
import home from "../images/home.png";
import pg from "../images/PG.png";
import office from "../images/office.png";
import placeholder from "../images/placeholder.svg";


import Nav from "./Nav";

//layout frm antd
const { Sider, Content } = Layout;

const styles = {
  cards: {
    fontWeight: 600,
  },
  input: {
    marginBottom: "1rem",
  },
};

//textarea frm antd
const { TextArea } = Input;

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [address_array, setAddressArray] = useState([]);
  const [updlocation, setUpdlocation] = useState("");
  const [updaddress, setUpdaddress] = useState("");
  const [updId, setUpdid] = useState(0);

  let newArray = [];
  //deleting the address
  const deleteAdd = (id) => {
    console.log("delete", id);
    newArray = address_array.filter((el) => el.id !== id);
    setAddressArray(newArray);
    message.error({
      content: "Address Deleted",
      className: "custom-class",
      style: {
        marginTop: "2vh",
      },
    });
  };

  //setting up the data for editing address
  const editAdd = (id) => {
    address_array.forEach((ele) => {
      if (ele.id === id) {
        setUpdid(ele.id);
        setUpdlocation(ele.location);
        setUpdaddress(ele.address);
        setOpen(true);
      }
    });
  };

  return (
    <div style={{ background: "whitesmoke", width: "100vw", height: "100vh" }}>
      <Layout style={{ padding: "2rem" }}>
        <Sider style={{ background: "whitesmoke" }}>
          <Nav />
        </Sider>

        <Layout>
          <Content style={{ background: "whitesmoke", margin: "0 0 0 1rem" }}>
            <Card>
              <p style={styles.cards}>My Addresses</p>
              <div style={{ float: "right", marginTop: "-2rem" }}>
                <Button
                  style={{ fontWeight: 600 }}
                  type="text"
                  onClick={() => setVisible(true)}
                >
                  {" "}
                  + Add Address
                </Button>
              </div>
            </Card>
            <Row gutter={16}>
              {address_array.length < 1 ? (
                <Col className="gutter-row" span={24}>
                  {" "}
                  <Card>
                    <img
                      src={placeholder}
                      style={{
                        height: "80vh",
                        marginLeft: "-10rem",
                        width: "100vw",
                      }}
                      alt="placeholder"
                    />
                  </Card>{" "}
                </Col>
              ) : (
                //setting the right icon for the location
                address_array.map((value, index) => {
                  let url = "";
                  const id = value.id;
                  if (value.location === "Home") {
                    url = home;
                  } else if (value.location === "Pg") {
                    url = pg;
                  } else if (value.location === "Office") {
                    url = office;
                  } else {
                    url = "";
                  }
                  return (
                    //generating individual address cards
                    <Col key={index} className="gutter-row" span={12}>
                      <Card
                        style={{
                          width: "100%",
                          height: "200px",
                          margin: "2rem",
                        }}
                      >
                        <img
                          src={url}
                          style={{ display: "inline-block", margin: "1rem" }}
                          alt={value.location}
                        />
                        <p
                          style={{
                            fontWeight: 600,
                            padding: "0.3rem",
                            fontSize: "1.5rem",
                            display: "inline-block",
                          }}
                        >
                          {value.location}
                        </p>
                        <div
                          style={{
                            paddingLeft: "3.5rem",
                            paddingRight: "2rem",
                            marginTop: "-1rem",
                          }}
                        >
                          <p style={{ color: "#ccc" }}>{value.address}</p>
                          <Button
                            style={{
                              margin: ".2rem",
                              background: "#ed1c24",
                              width: "10rem",
                              textAlign: "center",
                              color: "#fff",
                              borderRadius: "5px",
                            }}
                            onClick={() => editAdd(id)}
                          >
                            Edit
                          </Button>
                          <Button
                            style={{
                              margin: ".2rem",
                              background: "#ccc",
                              width: "10rem",
                              textAlign: "center",
                              color: "#fff",
                              borderRadius: "5px",
                            }}
                            onClick={() => {
                              console.log("id", id);
                              deleteAdd(id);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  );
                })
              )}
            </Row>
          </Content>
        </Layout>
      </Layout>
      {/* Model for Adding address */}
      <Modal
        title="Add address"
        visible={visible}
        onOk={() => {
          const payload = {
            id: address_array.length,
            location,
            address,
          };

          let newAddress = [];

          setAddressArray((prevAddressArray) => {
            newAddress = [...prevAddressArray, payload];
            return newAddress;
          });
          message.info(
            "Images will not be present for Addresses which doesn't include location as Home,Pg,Office."
          );
          message.success("Address added successfully");
          setVisible(false);
          setLocation("");
          setAddress("");
        }}
        onCancel={() => {
          setLocation("");
          setAddress("");
          setVisible(false);
        }}
      >
        <label>Location</label>
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
          placeholder="Location Ex:Home,Office..etc"
        />
        <label>Address</label>
        <TextArea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
          rows={4}
        />
      </Modal>

      {/* Model for editing the Address */}

      <Modal
        title="Edit address"
        visible={open}
        onOk={() => {
          let newAddress = [...address_array];
          newAddress[updId] = {
            ...newArray[updId],
            id: updId,
            location: updlocation,
            address: updaddress,
          };
          setAddressArray(newAddress);

          message.success("Your address is edited successfully");
          setOpen(false);
          setUpdlocation("");
          setUpdaddress("");
          setUpdid(0);
        }}
        onCancel={() => setOpen(false)}
      >
        <label>Location</label>
        <Input
          value={updlocation}
          onChange={(e) => setUpdlocation(e.target.value)}
          style={styles.input}
          placeholder="Location Ex:Home,Office..etc"
        />
        <label>Address</label>
        <TextArea
          value={updaddress}
          onChange={(e) => setUpdaddress(e.target.value)}
          style={styles.input}
          rows={4}
        />
      </Modal>
    </div>
  );
}
