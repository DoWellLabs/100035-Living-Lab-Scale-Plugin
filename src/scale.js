import React from "react";
// import { useState, useEffect } from "react";
import chroma from "chroma-js";
import "./index.css";

const Scale = (props) => {
  //   const [gradientColors, setGradientColors] = useState([]);
  var selectedScale;

  const colors = [];
  const generateColors = (numColors, color1, color2) => {
    const colorScale = chroma
      .scale([color1, color2])
      .mode("lch")
      .colors(numColors);

    for (let i = 0; i < numColors; i++) {
      colors.push(colorScale[i]);
    }

    // setGradientColors(colors);
  };

  generateColors(11, props.color1, props.color2);

  //   useEffect(() => {
  //     generateColors(10, "#ff0000", "#006622");
  //   }, []);

  const handleScaleSelection = (scale) => {
    selectedScale(scale);
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
            border:'none'
          }}
        >
          <input
            type="radio"
            id="radio"
            name="radio"
            style={{ transform: "scale(2)" }}
          />
        </div>
      </div>
    ));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{display:"flex"}}>
          <img src={props.image} width="50px" height="40px" alt="company logo" style={{marginTop: "25px",marginRight:"10px" }}/>
          <h3 style={{ marginBottom: "5px", marginTop: "20px" }}>
            {props.textHeader}
          </h3>
        </div>
        <h6 style={{ marginTop: "5px", marginBottom: "15px" }}>
          {props.textParagraph}
        </h6>
        <span
          style={{ marginBottom: "30px", fontWeight: "100", fontSize: "15px" }}
        >
          10 represents "will definetly recommend and 0 represents 'will not at
          all recommend'
        </span>
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
        {/* {selectedScale !== null && (
          <div>
            <h3>Your Selection: {selectedScale}</h3>
            <p>Thank you for your feedback!!</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Scale;
