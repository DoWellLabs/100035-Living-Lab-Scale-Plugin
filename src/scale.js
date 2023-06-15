import React, { useState } from "react";
import chroma from "chroma-js";
import axios from "axios";
import "./index.css";
import Img from './assets/thankyou.png'

const Scale = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [display, setDisplay] = useState(true);
  const [loader, setLoader] = useState("Submit");
  const colors = [];

  const generateColors = (numColors, colorOne, colorTwo) => {
    const colorScale = chroma
      .scale([colorOne, colorTwo])
      .mode("lch")
      .colors(numColors);

    for (let i = 0; i < numColors; i++) {
      colors.push(colorScale[i]);
    }
  };

  generateColors(11, props.colorOne, props.colorTwo);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("the selected radio is ", event.target.value);
  };

  const renderScaleOptions = () => {
    const scales = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return scales.map((scale, index) => (
      <div style={{ display: "block" }}>
        <div
          style={{
            backgroundColor: colors[scale],
            color: "white",
            width: "50px",
            height: "40px",
            margin: "3px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "12px",
          }}
        >
          {scale}
        </div>
        <div
          className="radio-button"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "5px",
            border: "none",
          }}
        >
          <input
            type="radio"
            id="radio"
            name="radio"
            value={scale}
            style={{ transform: "scale(2)" }}
            onChange={handleRadioChange}
          />
        </div>
      </div>
    ));
  };
  let changer = true;

  const url = `https://100035.pythonanywhere.com/api/nps_responses_create`;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    const a = parseInt(selectedOption);
    setLoader("Submitting...");
    axios
      .post(
        url,
        {
          template_name: "New Scale",
          scale_id: props.scaleId,
          instance_id: 1,
          brand_name: props.textHeader,
          product_name: "company",
          score: a,
          username: props.textHeader,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("the response is ", res);

        setLoader("Thank you!");
        setDisplay(false);
      });
  };

  return (
    <div style={{ display: "flex", border:"solid 1px blue", borderRadius:"10px",padding:"20px" }}>
      <div>
        <div style={{ display: "flex" }}>
          <img
            src={props.image}
            width="50px"
            height="40px"
            alt="company logo"
            style={{ marginTop: "25px", marginRight: "10px" }}
          />
          <h3
            style={{
              marginBottom: "5px",
              marginTop: "20px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "blue",
            }}
          >
            {props.textHeader}
          </h3>
        </div>
        <h6 style={{ marginTop: "5px", marginBottom: "15px" }}>
          {props.textParagraph}
        </h6>
        <div>
          {display ? (
            <div>
              {" "}
              <span
                style={{
                  marginBottom: "40px",
                  fontWeight: "100",
                  fontSize: "15px",
                }}
              >
                10 represents "will definetly recommend and 0 represents 'will
                not at all recommend'
              </span>
              <div>
                <div>
                  <div>
                    <div className="scale-options" style={{ display: "flex" }}>
                      {renderScaleOptions()}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{
                          marginBottom: "20px",
                          fontWeight: "100",
                          fontSize: "12px",
                        }}
                      >
                        Will not <br /> recommend
                      </span>
                      <span
                        style={{
                          marginBottom: "20px",
                          fontWeight: "100",
                          fontSize: "12px",
                        }}
                      >
                        Will definetly
                        <br /> recommend
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      className="btnSubmit"
                      style={{
                        padding: "15px",
                        paddingLeft: "35px",
                        paddingRight: "35px",
                        backgroundColor: colors[5],
                        color: "white",
                        fontSize: "16px",
                        border: "none",
                      }}
                      onClick={handleSubmit}
                    >
                      {loader}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={Img} alt="Thank you for submitting!"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scale;
