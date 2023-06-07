import React, { useState, useEffect } from "react";
import { getScaleData, postResponce } from "../utils/apiRequests";
import ScaleButton from "./ScaleButton";
import logo from "../assets/logoBlack.png";
import Button from "./Button";
import Values from "values.js";
import Loader from "./Loader";

const CreateScale = () => {
  // const [scaleName, setScaleName] = useState("");
  const [scaleSettings, setScaleSettings] = useState({});
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [scaleId, setScaleId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const getScaleButtons = (num, startingColor, endingColor) => {
    //generating color shades
    let startingColorShades = new Values(startingColor).shades(9);
    let endingColorShades = new Values(endingColor).shades(9);
    //generating scale
    let items = [];
    for (let i = 0; i <= num; i++) {
      items.push(
        <ScaleButton
          key={i}
          value={i}
          title={i}
          color={`${
            i < num / 2
              ? `#${startingColorShades[num / 2 - i].hex}`
              : `#${endingColorShades[i - num / 2].hex}`
          }`}
        />
      );
    }
    return items;
  };
  useEffect(() => {
    setIsFetchingData(true);
    const temp = async () => {
      try {
        const scaleData = await getScaleData(
          "https://100035.pythonanywhere.com/api/nps_settings/TestSetting4834"
        );
        console.log(scaleData.payload);
        setScaleId(scaleData.payload.data[0]._id);
        setScaleSettings(scaleData.payload.data[0].settings);
        setDescription(
          //dummy description for now update when we have it in db
          "Based on your exprience of using ICICI Bank's Internet facility, how likely are you to recommand ICICI Bank to your friend, relative or colleague on a scale of 0 to 10?"
        );
        setMessage(
          //dummy message will update once have in db
          '[10 represents "WIll definitely recommend" and 0 represents "Will not at all recommend"]'
        );
        console.log("Got Scale Settings.");
        setIsFetchingData(false);
      } catch (e) {
        console.log("Something went wrong!!");
        setIsFetchingData(false);
      }
    };
    temp();
  }, []);

  //On submit response
  const submitResponse = async (scaleSize) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      let checkedValue = scaleSize;
      for (let i = 0; i <= scaleSize; i++) {
        if (document.getElementById(`${i}`).checked) {
          checkedValue = i;
        }
      }

      const responceData = {
        template_name: scaleSettings.template_name,
        scale_id: scaleId,
        instance_id: 3,
        brand_name: "xyz000",
        product_name: "xyz000",
        score: checkedValue,
        username: "Ahmar",
      };

      await postResponce(
        "https://100035.pythonanywhere.com/api/nps_responses_create",
        responceData
      );
      setIsLoading(false);
    } catch (e) {
      console.log("Something went wrong!!");
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      {isFetchingData ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-fit h-fit ml-0 p-7 bg-white">
          <div>
            {/* dummy company image */}
            <img src={logo} alt="Company Logo" width={190} height={200} />
          </div>
          <p className="text-[25px] text-gray-400 mt-4">{description}</p>
          <p className="text-[15px] text-gray-500 mt-6">{message}</p>
          <div className="flex w-full h-full justify-between">
            {getScaleButtons(
              scaleSettings.numberrating,
              scaleSettings.roundcolor,
              scaleSettings.scalecolor
            )}
          </div>
          <div className="flex justify-between w-full">
            <p className="text-[13px] text-gray-400">
              Will Not at
              <br /> all Recommend
            </p>
            <p className="text-[13px] text-gray-400">
              Will definitely
              <br /> Recommend
            </p>
          </div>
          <div className="flex w-full justify-center items-center">
            <Button
              title={"Next"}
              onSubmit={() => {
                submitResponse(parseInt(scaleSettings.numberrating));
              }}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CreateScale;
