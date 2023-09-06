import React, { useState, useEffect } from "react";
import "./Images.scss";
import "mdbreact/dist/css/mdb.css";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { useSubstrateState } from "./substrate-lib";
import Box from "@mui/material/Box";
import { u8aToString, hexToU8a } from '@polkadot/util'


const myStyle = {
    background: "white",
    color: "black",
    borderRadius: "10px",
};
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdiNjYwNTlDNTNiMDI4QTQxYTUwOWE0MWQxRmFCM2ViMzc1OEZkNTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzA3MzAzMTY2OTUsIm5hbWUiOiJUb2tlbjEifQ.eykiWWX9VaLAsl4Jf9WP_fueywUqL2HiF9ddSCD_-P4";

const Images = () => {
    const { api, currentAccount } = useSubstrateState();
    const [count, setCount] = useState(0);
    const [docs, setDocs] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [index, setIndex] = useState(0);

    const getFromAcct = async () => {
        return currentAccount;
    };

    const queryNumUploads = async () => {
        const r1 = await api.query.bhdaoModule.uploadCount();
        console.log("r1", r1)
        setCount(r1.toNumber());
    }

    useEffect(() => {
        queryNumUploads();

        // const cid = localStorage.getItem("image_cid");
        // const imageName = localStorage.getItem("image_name");
        // const imageUrl = 'https://' + cid + '.ipfs.w3s.link/' + imageName;
        // const imgTitle = localStorage.getItem("title");
        // const imgDescription = localStorage.getItem("description");
        // setImgUrl(imageUrl);
        // setTitle(imgTitle);
        // setDescription(imgDescription);
    }, []);

    useEffect(() => {
        const queryDocs = async () => {
            if (count > 0) {
                let result = []
                for (let i = 1; i <= count; ++i) {
                    const r1 = await api.query.bhdaoModule.uploads(i);
                    result.push(u8aToString(hexToU8a(JSON.parse(r1).hash)));
                }
                setDocs(result);
            }
        }

        console.log(count);
        queryDocs()
    }, [count]);

    const fetchByIndex = async (e) => {
        if (count <= 0) return;
        const currentIndex = e.target.value - 1;
        if (currentIndex > count) return;
        setIndex(currentIndex);
        const cid = docs[currentIndex];
        // const name = docs[currentIndex].name;
        const url = 'https://' + cid + '.ipfs.w3s.link/metadata.json';
        const metadata = await fetch(url).then((res) => res.json());
        const imageUrl = metadata.image
        console.log("meta",metadata);
        setTitle(metadata.title);
        setDescription(metadata.description);
        setImgUrl(imageUrl);
        // console.log()
    }

    
    console.log("title", title)
    console.log("description", description)

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
                    <img className="our-img" src={imgUrl} />
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
                    <input id="name" type="number" min="1" max={count} defaultValue={count} onChange={fetchByIndex} style={myStyle}></input>
                    <label htmlFor="title" className="form-label mb-3">
                        Title
                    </label>
                    <textarea
                        style={myStyle}
                        id="title"
                        rows="1"
                        cols="48"
                        placeholder="Format: `Name_Date_Historian-Initials.Org`"
                        name="title"
                    >{title}</textarea> {/* plz change this area to display here*/}
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
                    >{description}</textarea> {/* plz change this area to display here*/}
                </Box>
            </div>
        </div>
    )
}

export default Images;
