import React, { useState } from "react";
import "./Create.scss";
import "mdbreact/dist/css/mdb.css";
import { MDBFile } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { useSubstrateState } from "./substrate-lib";
import { Web3Storage } from "web3.storage";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdiNjYwNTlDNTNiMDI4QTQxYTUwOWE0MWQxRmFCM2ViMzc1OEZkNTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzA3MzAzMTY2OTUsIm5hbWUiOiJUb2tlbjEifQ.eykiWWX9VaLAsl4Jf9WP_fueywUqL2HiF9ddSCD_-P4";

const Create = () => {
  const { api, keyring, currentAccount } = useSubstrateState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [folderCID, setFolderCID] = useState('');
  const [imageName, setImageName] = useState('');

  const client = makeStorageClient();

  const myStyle = {
    background: "white",
    color: "black",
    borderRadius: "10px",
  };

  function makeStorageClient() {
    return new Web3Storage({ token: TOKEN });
  };

  const getFromAcct = async () => {
    return currentAccount;
  };

  console.log("api.tx", api.tx.bhdaoModule);
 
 
  const accounts = keyring.getPairs();

  const handleChangeTitle = (e) => {

    setTitle(e.target.value);

  };
  const handleChangeDescription = (e) => {

    setDescription(e.target.value);

  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("title------>", title);
    console.log("description------->", description);
    const type = "document";
    if (!title || !description || !type) {
      alert("Name and Description fields are necessary");
      return;
    }

    if (!folderCID) {
      alert("Your Document didn't upload to IPFS.");
      return;
    }
    // uploading metadata as json file
    const obj = {"title": title, "description": description,"image": `https://${folderCID}.ipfs.w3s.link/${imageName}`}
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })

    try {
      const cid = await client.put([new File([blob], "metadata.json")]);
      console.log("cid----->", cid)  
      const fromAcct = await getFromAcct();
      const call1 = api.tx.bhdaoModule.uploadDocument(cid);
      console.log("acct",accounts[0]);
      const unsub = await call1.signAndSend(accounts[0], (result) => { console.log("tx-result------>",result.toHuman()) });
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  };


  const imageChange = async (e) => {
    console.log(e);
    console.log("file");
    const file = e.target.files;
    console.log(file);

    console.log("file_name:", file[0].name);
    const imgName = file[0].name;

    try {
      const cid = await client.put(file);
      console.log('stored files with cid:', cid);
      localStorage.setItem("image_cid", cid);
      localStorage.setItem("image_name", imgName);
      setFolderCID(cid);
      setImageName(imgName);
    } catch (error) {
      console.log('Error uploading file: ', error)
    }

  }

  return (
    <div className="main">
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container1">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="pageTitle text-center text-md-start">
                Create New Proposal
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <Link to="/">Home</Link>
                </li>

                <li className="separator">
                  <Icon.ChevronRight />
                </li>
                <li className="item current">Create New Proposal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-6"
            style={{ WebkitAlignContent: "center", color: "beige" }}
          >
            <div className="container-name ">
              <form>
                <div className="mb-2">
                  <label
                    className="form-label"
                    htmlFor="name"
                    style={{ color: "beige" }}
                  >
                    Name
                  </label>
                  <textarea
                    style={myStyle}
                    id="name"
                    rows="1"
                    cols="48"
                    placeholder="Your Name"
                    name="name"
                  ></textarea>
                </div>
              </form>
            </div>
            <div
              className="upload-formate "
              style={{
                color: "beige",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>Upload Asset file</strong>

              <span> (Drag or choose a file to upload)</span>
            </div>
            <div
              className="upload-area  ml-2"
              style={{
                border: "dashed",
                backgroundColor: "black",
                marginLeft: "10px",
                borderRadius: "10px",
              }}
            >
              <div
                className="upload"
                style={{
                  color: "red",
                  fontWeight: "Bold",
                  alignItems: "center",
                }}
              >
                <Icon.Upload
                  style={{
                    fontWeight: 300,
                    width: 35,
                    height: 35,
                    fontSize: "70px",
                    strokeWidth: "2px",
                    color: "#00a3ff",
                    marginBottom: "10px",
                    marginLeft: "175px",
                  }}
                />
                <div className="text-center">Choose a Cover/NFT</div>
                <input
                  name="file"
                  id="file"
                  type="file"
                  className="inputfile"
                  data-multiple-caption="{count} files selected"
                  multiple
                  onChange={imageChange}
                />
              </div>
              <span style={{ paddingLeft: "60px", marginTop: "10px" }}>
                PNG, GIF, WEBP, MP4 or MP3.{" "}
              </span>
              <br />
              <span style={{ paddingLeft: "130px", marginTop: "10px" }}>
                Max 1Gb
              </span>
            </div>
          </div>
          <div
            className="col-lg-7 "
            style={{
              background: "black",
              color: "yellow",
              maxWidth: "470px",
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <Box component="form" >
              <label htmlFor="name" className="form-label mb-3">
                Title
              </label>
              <textarea
                onChange={handleChangeTitle}
                style={myStyle}
                id="title"
                rows="1"
                cols="48"
                placeholder="Format: `Name_Date_Historian-Initials.Org`"
                name="title"
              ></textarea>
              <label htmlFor="Description" className="form-label mb-1 mt-2">
                Description
              </label>
              <textarea
                onChange={handleChangeDescription}
                id="description"
                rows="6"
                cols="48"
                style={{ borderRadius: "10px" }}
                placeholder="e.g. “Martin Luther King Jr. was a social activist and Baptist minister who played a key role in the American civil rights movement from the mid-1950s until his assassination in 1968.”"
                name="description"
              ></textarea>
              <div className="btn-group">
                <button
                  className="btn btn-large btn-primary-alta  btn-space  mt-2"
                  type="submit"
                  data-btn="preview"
                  style={{
                    margin: "5px 5px 5px 0px ",
                    borderRadius: "10px",
                  }}
                >
                  <span>Preview</span>
                </button>{" "}
                <button
                  onClick={handleClick}
                  className="btn btn-large btn-primary btn-space  mt-2 "
                  type="submit"
                  style={{
                    borderRadius: "10px",
                    margin: "5px 0px 5px 0px ",
                    width: "280px",
                  }}
                >
                  <span>Make Proposal</span>
                </button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create;
