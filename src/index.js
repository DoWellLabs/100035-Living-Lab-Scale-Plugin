import React, { useState } from "react";
import axios from "axios";
import "./index.css";

wp.blocks.registerBlockType("ourplugin/scale-plugin", {
  title: "Scale_Plugin 1.0",
  icon: "admin-appearance",
  category: "common",
  attributes: {
    textHeader: { type: "string" },
    textParagraph: { type: "string" },
    colorOne: { type: "string" },
    colorTwo: { type: "string" },
    image: { type: "string" },
    scaleId: { type: "string" },
  },
  edit: function (props) {
    const url = `https://100035.pythonanywhere.com/api/nps_settings_create/`;
    const [loader, setLoader] = useState("Save Settings");
    const updateHeader = (e) => {
      props.setAttributes({ textHeader: e.target.value });
    };
    const updateParagraph = (e) => {
      props.setAttributes({ textParagraph: e.target.value });
    };
    const updateColorOne = (e) => {
      props.setAttributes({ colorOne: e.target.value });
    };
    const updateColorTwo = (e) => {
      props.setAttributes({ colorTwo: e.target.value });
    };
    const updateImage = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        props.setAttributes({ image: event.target.result });
      };
      reader.readAsDataURL(file);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("handle submit");
      setLoader("Saving...");
      axios
        .post(
          url,
          {
            username: props.attributes.textHeader,
            orientation: "horizontal",
            scalecolor: props.attributes.colorOne,
            roundcolor: props.attributes.colorTwo,
            fontcolor: props.attributes.colorOne,
            format: "numbers",
            time: "60",
            name: "New Scale",
            left: "Bad",
            right: "Good",
            center: "Neutral",
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("the response is ", res);
          // console.log("the data is ", res.data);
          const responseData = JSON.parse(res.data.success);
          const insertedId = responseData.inserted_id;
          props.setAttributes({ scaleId: insertedId });
          console.log("The inserted id is", insertedId);
          setLoader("Save Settings");
        });
    };
    return (
      <div className="top">
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              padding: "10px",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <p>Insert the image/logo</p>{" "}
            <input type="file" accept="image/*" onChange={updateImage} />
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <p>Insert the text header</p>{" "}
            <input
              type="text"
              placeholder="Text File"
              value={props.attributes.textHeader}
              onChange={updateHeader}
            />
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <p>Insert the text paragraph</p>{" "}
            <input
              type="text"
              placeholder="Text File"
              value={props.attributes.textParagraph}
              onChange={updateParagraph}
            />
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <p>
              Insert the first color &#91;Hex value only&#93; Eg. #ff0000
            </p>{" "}
            <input
              type="text"
              placeholder="color one"
              value={props.attributes.colorOne}
              onChange={updateColorOne}
            />
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <p>
              Insert the second color &#91;Hex value only&#93; Eg. #006622
            </p>{" "}
            <input
              type="text"
              placeholder="color two"
              value={props.attributes.colorTwo}
              onChange={updateColorTwo}
            />
          </div>
          <p className="submit" style={{display:"flex", justifyContent:"center"}}>
            <button type="submit" className="button button-primary">
              {loader}
            </button>
          </p>
        </form>
      </div>
    );
  },
  save: function () {
    return null;
  },
});

const EditFun = (props) => {};
