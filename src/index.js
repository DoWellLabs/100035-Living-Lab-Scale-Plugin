import "./index.css";
import Scale from "./scale";

wp.blocks.registerBlockType("ourplugin/scale-plugin", {
  title: "Scale Plugin 1.1",
  icon: "admin-customizer",
  category: "common",
  attributes: {
    textHeader: { type: "string" },
    textParagraph: { type: "string" },
    colorOne: { type: "string" },
    colorTwo: { type: "string" },
    image: { type: "string" },
  },
  edit: function (props) {
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
    return (
      <div className="top">
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
      </div>
    );
  },
  save: function (props) {
    return (
      <div style={{ border: "1px solid", padding: "10px" }}>
        <Scale
          textHeader={props.attributes.textHeader}
          textParagraph={props.attributes.textParagraph}
          color1={props.attributes.colorOne}
          color2={props.attributes.colorTwo}
          image={props.attributes.image}
        />
      </div>
    );
  },
  deprecated: [
    {
      attributes: {
        colorOne: { type: "string" },
        colorTwo: { type: "string" },
      },
      save: function (props) {
        return (
          <div style={{ border: "1px solid" }}>
            <Scale
              textHeader={props.attributes.textHeader}
              textParagraph={props.attributes.textParagraph}
              color1={props.attributes.colorOne}
              color2={props.attributes.colorTwo}
            />
          </div>
        );
      },
    },
  ],
});
