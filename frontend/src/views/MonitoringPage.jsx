import React, { useEffect, useState } from "react";

// component
import PageName from "../components/PageName";
import DeviceCheckBox from "../components/DeviceCheckBox";
import OptionButton from "../components/OptionButton";
import Label from "../components/Label";
import UploadImage from "../components/UploadImage";
import Button from "../components/Button";

const MonitoringPage = () => {
  // shift button
  const [shift, setShift] = useState("");
  const handleShift = async (event, shiftNum) => {
    event.preventDefault();
    console.log(shift, "in handle");
    try {
      setShift(shiftNum);
      setTime("");
      setSite("");
    } catch (error) {
      console.log(error);
    }
  };

  // time button
  const [time, setTime] = useState("");
  const handleTime = async (event, time) => {
    event.preventDefault();
    console.log(time, "in handle");
    try {
      setTime(time);
      setSite("");
    } catch (error) {
      console.log(error);
    }
  };

  // site button
  const [site, setSite] = useState("");
  const handleSite = async (event, site) => {
    event.preventDefault();
    console.log(site, "in handle");
    try {
      setSite(site);
    } catch (error) {
      console.log(error);
    }
  };

  // device checkbox
  const [deviceStates, setDeviceStates] = useState({
    plc: false,
    daq: false,
    wim: false,
    ocr: false,
    rpm: false,
  });

  const handleCheckboxChange = (event, deviceId) => {
    const { checked } = event.target;

    setDeviceStates((prevState) => ({
      ...prevState,
      [deviceId]: checked,
    }));
  };

  // device status notes
  const [notes, setNotes] = useState("");

  const handleChangeNotes = (event) => {
    setNotes(event.target.value);
  };

  // submit report
  const handleSubmitReport = (event) => {
    event.preventDefault();
    try {
      console.log(shift, "submitted shift");
      console.log(time, "submitted time");
      console.log(site, "submitted site");
      console.log(deviceStates, "submitted deviceState");
      console.log(notes, "submitted deviceState");
    } catch (error) {
      console.log(error);
    }
  };

  // hardcode data
  const shiftButtonList = [
    {
      id: 1,
      content: "1",
      className: "border-y-4",
      disabled: false,
      status: "complete",
    },
    {
      id: 2,
      content: "2",
      className: "border-y-4",
      disabled: false,
      status: "incomplete",
    },
    {
      id: 3,
      content: "3",
      className: "border-y-4 border-e-4 rounded-e-lg",
      disabled: false,
      status: "empty",
    },
  ];
  const timeButtonList = [
    {
      id: 1,
      content: shift == 1 ? "09:00" : shift == 2 ? "17:00" : "01:00",
      className: "border-y-4",
      disabled: false,
      status: "complete",
    },
    {
      id: 2,
      content: shift == 1 ? "11:00" : shift == 2 ? "19:00" : "03:00",
      className: "border-y-4",
      disabled: false,
      status: "incomplete",
    },
    {
      id: 3,
      content: shift == 1 ? "13:00" : shift == 2 ? "21:00" : "05:00",
      className: "border-y-4",
      disabled: false,
      status: "empty",
    },
    {
      id: 4,
      content: shift == 1 ? "15:00" : shift == 2 ? "23:00" : "07:00",
      className: "border-y-4 border-e-4 rounded-e-lg",
      disabled: false,
      status: "empty",
    },
  ];
  const siteButtonList = [
    {
      id: 1,
      content: "JICT IMPORT A",
      className: "border-y-4",
      disabled: false,
      status: "complete",
    },
    {
      id: 2,
      content: "JICT IMPORT B",
      className: "border-y-4",
      disabled: false,
      status: "incomplete",
    },
    {
      id: 3,
      content: "JICT EXPORT",
      className: "border-y-4",
      disabled: false,
      status: "empty",
    },
    {
      id: 4,
      content: "KOJA IMPORT",
      className: "border-y-4",
      disabled: false,
      status: "empty",
    },
    {
      id: 5,
      content: "KOJA EXPORT",
      className: "border-y-4",
      disabled: false,
      status: "empty",
    },
    {
      id: 6,
      content: "MTI CA EXPORT",
      className: "border-y-4",
      disabled: false,
      status: "empty",
    },
    {
      id: 7,
      content: "GRAHA SEGARA",
      className: "border-y-4 border-e-4 rounded-e-lg",
      disabled: false,
      status: "empty",
    },
  ];
  const deviceCheckList = [
    {
      id: 1,
      deviceId: "plc",
      deviceName: "PLC",
      className: "",
      disabled: false,
    },
    {
      id: 2,
      deviceId: "daq",
      deviceName: "DAQ",
      className: "",
      disabled: false,
    },
    {
      id: 3,
      deviceId: "ocr",
      deviceName: "OCR",
      className: "",
      disabled: false,
    },
    {
      id: 4,
      deviceId: "wim",
      deviceName: "WIM",
      className: "",
      disabled: false,
    },
    {
      id: 5,
      deviceId: "rpm",
      deviceName: "RPM",
      className: "",
      disabled: false,
    },
  ];

  useEffect(() => {
    // console.log(plc, "plc in hooks");
    // console.log(daq, "daq in hooks");
    // console.log(wim, "wim in hooks");
    // console.log(ocr, "ocr in hooks");
    // console.log(rpm, "rpm in hooks");
    console.log(deviceStates, "deviceStates in hooks");
  }, [deviceStates]);
  return (
    // <LoadingScreen />

    <div className="pl-[15%] pt-[3.3%] h-screen">
      <div className="m-4 h-[96.7%] text-tertiary">
        <PageName text="MONITORING REPORT" className="" />
        <form
          onSubmit={handleSubmitReport}
          className="p-4 w-full h-[90%] border-2 rounded-lg flex flex-col gap-4"
        >
          <div className="w-full">
            <OptionButton
              buttonArray={shiftButtonList}
              name="SHIFT"
              onClick={handleShift}
              flag={shift}
            />
          </div>
          <div className="w-full">
            <OptionButton
              buttonArray={timeButtonList}
              name="TIME"
              onClick={handleTime}
              flag={time}
            />
          </div>
          <div className="w-full">
            <OptionButton
              buttonArray={siteButtonList}
              name="SITE"
              onClick={handleSite}
              flag={site}
            />
          </div>
          <div>
            <Label
              htmlFor=""
              className="font-semibold text-tertiary"
              text="DEVICE STATUS"
            />
            <div className="p-4 border-2 rounded-lg">
              <DeviceCheckBox
                deviceArray={deviceCheckList}
                onChange={handleCheckboxChange}
                state={deviceStates}
              />
              <UploadImage />
              <textarea
                name="status Notes"
                id="statusNotes"
                rows="7"
                value={notes}
                onChange={handleChangeNotes}
                placeholder="Write additional information here (optional)"
                className="w-full p-2 border-2 rounded-lg"
              />
              <div className="text-tertiary w-full flex justify-end">
                {notes.length} / 500 Characters
              </div>
              <div className="w-full flex justify-center my-2">
                <Button
                  type="submit"
                  text="Create Report"
                  className="w-[30%] text-white hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MonitoringPage;
