import React, { useState, useEffect } from "react";
import "./Images.scss";
import "mdbreact/dist/css/mdb.css";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { useSubstrateState } from "./substrate-lib";
import Box from "@mui/material/Box";

const myStyle = {
    background: "white",
    color: "black",
    borderRadius: "10px",
};
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdiNjYwNTlDNTNiMDI4QTQxYTUwOWE0MWQxRmFCM2ViMzc1OEZkNTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzA3MzAzMTY2OTUsIm5hbWUiOiJUb2tlbjEifQ.eykiWWX9VaLAsl4Jf9WP_fueywUqL2HiF9ddSCD_-P4";

const Images = () => {
    const { api, currentAccount } = useSubstrateState();
    const [count, setCount] = useState(0);
    const [docs, setDocs] = useState({});
    const [index, setIndex] = useState(0);
    const cid = localStorage.getItem("image_cid");
    const imageName = localStorage.getItem("image_name");
    const imageUrl = 'https://' + cid + '.ipfs.w3s.link/' + imageName;

    console.log('imageUrl', imageUrl);

    const getFromAcct = async () => {
        return currentAccount;
    };


    useEffect(() => {
        const queryNumUploads = async () => {
            const r1 = await api.query.bhdaoModule.uploadCount();
            setCount(r1.toNumber());
        }

        queryNumUploads();
    }, []);

    useEffect(() => {
        const queryDocs = async () => {
            if (count > 0) {
                let result = []
                for (let i = 1; i <= count; ++i) {
                    const r1 = await api.query.bhdaoModule.uploads(i);
                    result.push(JSON.parse(r1));
                }
                setDocs(result);
            }
        }

        queryDocs()
    }, [count]);

    console.log(count);
    console.log("docs;", docs);


    return (
        <div className="main" >
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="pageTitle text-center text-md-start">
                                Images
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
                                <li className="item current">Images</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="img-container">
                    <img className="our-img" src={imageUrl} />
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
                    margin: "auto",
                }}
            >
                <Box component="form" >
                    <label htmlFor="name" className="form-label mb-3">
                        Index
                    </label>
                    <input type="number" max={count} min="0" style={{background: "white"}} name="Index" onChange={(e)=>{setIndex(e.target.value)}}>{index}</input>
                    <label htmlFor="name" className="form-label mb-3">
                        Title
                    </label>
                    <textarea
                        style={myStyle}
                        id="title"
                        rows="1"
                        cols="48"
                        placeholder="Format: `Name_Date_Historian-Initials.Org`"
                        name="title"
                    >{docs.title[index] || ""}</textarea> {/* plz change this area to display */}
                    <label htmlFor="Description" className="form-label mb-1 mt-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows="6"
                        cols="48"
                        style={{ borderRadius: "10px" }}
                        placeholder="e.g. “Martin Luther King Jr. was a social activist and Baptist minister who played a key role in the American civil rights movement from the mid-1950s until his assassination in 1968.”"
                        name="description"
                    >{docs.description[index] || ""}</textarea> {/* plz change this area to display */}
                </Box>
            </div>
        </div>
    )
}

export default Images;
