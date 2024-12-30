import React, { useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";

// component
import PageName from "../components/PageName";
import DeviceCheckBox from "../components/DeviceCheckBox";
import OptionButton from "../components/OptionButton";
import Label from "../components/Label";
import UploadImage from "../components/UploadImage";
import Button from "../components/Button";
import SwitchButton from "../components/SwitchButton";
import Input from "../components/Input";

const MonitoringPage = () => {
  const [loading, setLoading] = useState(false);
  // shift button
  const [shift, setShift] = useState("");
  const handleShift = async (event, shiftNum) => {
    event.preventDefault();
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
    try {
      setSite(site);
    } catch (error) {
      console.log(error);
    }
  };

  // device state
  const [deviceStatesButton, setDeviceStatesButton] = useState({
    plc: true,
    daq: true,
    wim: true,
    ocr: true,
    rpm: true,
  });
  const handleSwitchChange = (event, id) => {
    event.preventDefault();
    setDeviceStatesButton((prevState) => {
      const deviceArray = Object.entries(prevState);
      const updatedDeviceArray = deviceArray.map(([key, value], index) => {
        if (index === id) {
          return [key, !value];
        }
        return [key, value];
      });

      return Object.fromEntries(updatedDeviceArray);
    });
  };

  // device status notes
  const [notes, setNotes] = useState("");
  const handleChangeNotes = (event) => {
    setNotes(event.target.value);
  };

  // upload image
  const [deviceImages, setDeviceImages] = useState([
    {
      preview: null,
      compressedImage: null,
      fileName: "No File Chosen",
      inputKey: 0,
    },
    {
      preview: null,
      compressedImage: null,
      fileName: "No File Chosen",
      inputKey: 0,
    },
    {
      preview: null,
      compressedImage: null,
      fileName: "No File Chosen",
      inputKey: 0,
    },
    {
      preview: null,
      compressedImage: null,
      fileName: "No File Chosen",
      inputKey: 0,
    },
    {
      preview: null,
      compressedImage: null,
      fileName: "No File Chosen",
      inputKey: 0,
    },
  ]);

  const fileInputRefs = useRef(
    Array(5)
      .fill()
      .map(() => React.createRef()) // Create refs for each device
  );

  const handleDevicesImageUpload = async (event, index) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("Please select an image file.");
      return;
    }

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const previewUrl = URL.createObjectURL(compressedFile);

      setDeviceImages((prev) => {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          preview: previewUrl,
          compressedImage: compressedFile,
          fileName: file.name,
        };
        return updated;
      });
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
  };

  const handleDevicesCancelUpload = (index) => {
    setDeviceImages((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        preview: null,
        compressedImage: null,
        fileName: "No File Chosen",
        inputKey: updated[index].inputKey + 1, // Force remount
      };
      return updated;
    });

    // Reset file input
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].current.value = null;
    }
  };

  // page mode toogler
  const [pageMode, setPageMode] = useState(true);
  const handleTogglePage = (event, value) => {
    event.preventDefault();
    if (pageMode !== value) {
      setPageMode(!pageMode);
    }
  };

  // submit report
  const handleSubmitReport = (event) => {
    event.preventDefault();
    try {
      const devicesStatus = [];
      Object.keys(deviceStatesButton).forEach((key, index) => {
        const device = {
          deviceId: index + 1,
          deviceName: key,
          deviceState: deviceStatesButton[key],
          deviceStateImageFile: deviceImages[index].compressedImage,
          deviceStatePreviewImage: deviceImages[index].preview,
        };
        devicesStatus.push(device);
      });
      const submittedMonitoringReport = {
        user: "username",
        shift,
        reportTime: time,
        createdReportTime: new Date().toLocaleString(),
        site,
        devicesStatus,
        notes,
      };
      // const result = submittedMonitoringReport.devicesStatus = devicesStatus
      console.log(submittedMonitoringReport);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitSummary = (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // site state
  const [siteStatesButton, setSiteStatesButton] = useState({
    "JICT Import A": true,
    "JICT Import B": true,
    "JICT Export": true,
    "KOJA Import": true,
    "KOJA Export": true,
    "MTI CA Export": true,
    "GRAHA SEGARA": true,
  });
  const handleSwitchChangeSite = (event, id) => {
    event.preventDefault();
    setSiteStatesButton((prevState) => {
      const siteArray = Object.entries(prevState);
      const updatedSiteArray = siteArray.map(([key, value], index) => {
        if (index === id) {
          return [key, !value];
        }
        return [key, value];
      });

      return Object.fromEntries(updatedSiteArray);
    });
  };

  // total scan
  const [siteTotalScanned, setSiteTotalScanned] = useState([
    { siteName: "JICT Import A", totalScan: 0 },
    { siteName: "JICT Import B", totalScan: 0 },
    { siteName: "JICT Export", totalScan: 0 },
    { siteName: "KOJA Import", totalScan: 0 },
    { siteName: "KOJA Export", totalScan: 0 },
    { siteName: "MTI CA Export", totalScan: 0 },
    { siteName: "GRAHA SEGARA", totalScan: 0 },
  ]);

  // hardcode data
  const shiftButtonList = [
    {
      id: 1,
      content: "1",
      className: "border-y-2",
      disabled: false,
      status: "complete",
    },
    {
      id: 2,
      content: "2",
      className: "border-y-2",
      disabled: false,
      status: "incomplete",
    },
    {
      id: 3,
      content: "3",
      className: "border-y-2 border-e-2 rounded-e-lg",
      disabled: false,
      status: "empty",
    },
  ];
  const timeButtonList = [
    {
      id: 1,
      content: shift == 1 ? "09:00" : shift == 2 ? "17:00" : "01:00",
      className: "border-y-2",
      disabled: false,
      status: "complete",
    },
    {
      id: 2,
      content: shift == 1 ? "11:00" : shift == 2 ? "19:00" : "03:00",
      className: "border-y-2",
      disabled: false,
      status: "incomplete",
    },
    {
      id: 3,
      content: shift == 1 ? "13:00" : shift == 2 ? "21:00" : "05:00",
      className: "border-y-2",
      disabled: false,
      status: "empty",
    },
    {
      id: 4,
      content: shift == 1 ? "15:00" : shift == 2 ? "23:00" : "07:00",
      className: "border-y-2 border-e-2 rounded-e-lg",
      disabled: false,
      status: "empty",
    },
  ];
  const siteButtonList = [
    {
      id: 1,
      content: "JICT IMPORT A",
      className: "border-y-2",
      disabled: false,
      status: "complete",
    },
    {
      id: 2,
      content: "JICT IMPORT B",
      className: "border-y-2",
      disabled: false,
      status: "incomplete",
    },
    {
      id: 3,
      content: "JICT EXPORT",
      className: "border-y-2",
      disabled: false,
      status: "empty",
    },
    {
      id: 4,
      content: "KOJA IMPORT",
      className: "border-y-2",
      disabled: false,
      status: "empty",
    },
    {
      id: 5,
      content: "KOJA EXPORT",
      className: "border-y-2",
      disabled: false,
      status: "empty",
    },
    {
      id: 6,
      content: "MTI CA EXPORT",
      className: "border-y-2",
      disabled: false,
      status: "empty",
    },
    {
      id: 7,
      content: "GRAHA SEGARA",
      className: "border-y-2 border-e-2 rounded-e-lg",
      disabled: false,
      status: "empty",
    },
  ];

  useEffect(() => {
    // console.log(plc, "plc in hooks");
    // console.log(daq, "daq in hooks");
    // console.log(wim, "wim in hooks");
    // console.log(ocr, "ocr in hooks");
    // console.log(rpm, "rpm in hooks");
    // console.log(deviceStates, "deviceStates in hooks");
    // console.log(deviceImages, "deviceImages in hooks");
  }, []);
  return (
    // <LoadingScreen />

    <div className="pl-[15%] pt-[3.3%] ml-2 h-screen">
      <div className="m-4 h-[95%] text-tertiary">
        <div className="h-[7%] flex flex-row justify-between">
          <PageName
            text="MONITORING REPORT"
            className="h-full flex flex-col justify-center text-center"
          />
          <div className="w-[15%] h-[75%]">
            <p className="w-full text-center">Page Mode</p>
            <div className="w-full h-[75%] flex flex-row font-semibold rounded-lg hover:ring-2 hover:border-0 hover:ring-tertiary duration-200">
              <button
                className={`w-[50%] border-s-2 hover:bg-slate-200 hover:text-tertiary border-y-2 rounded-s-lg duration-200
                    ${pageMode && "bg-slate-600 text-white"}`}
                onClick={(event) => handleTogglePage(event, true)}
              >
                Report
              </button>
              <button
                className={`w-[50%] border-e-2 hover:bg-slate-200 hover:text-tertiary border-y-2 rounded-e-lg duration-200
                     ${!pageMode && "bg-slate-600 text-white"}`}
                onClick={(event) => handleTogglePage(event, false)}
              >
                Summary
              </button>
            </div>
          </div>
        </div>
        {pageMode ? (
          <form
            onSubmit={handleSubmitReport}
            className="pt-4 w-full h-[93%] flex flex-col gap-2"
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
            <div className="w-full h-[73%]">
              <Label
                htmlFor=""
                className="font-semibold text-tertiary"
                text={`DEVICE STATUS${
                  site ? ": " + site + ", shift " + shift + " at " + time : ""
                } `}
              />
              <div className="p-2 h-[95%] flex flex-col justify-between">
                <div className="w-full h-[45%]">
                  <SwitchButton
                    deviceState={deviceStatesButton}
                    onClick={handleSwitchChange}
                  />
                  <ul className="w-full h-[100%] flex flex-row justify-between">
                    {deviceImages.map((device, index) => {
                      return (
                        <UploadImage
                          key={index}
                          imgSrc={device.preview}
                          onChange={handleDevicesImageUpload}
                          fileName={device.fileName}
                          onClick={handleDevicesCancelUpload}
                          loadingState={false}
                          inputKey={device.inputKey}
                          fileInputRef={fileInputRefs.current[index]}
                          index={index}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="w-full h-[40%] mt-2">
                  <p className="text-tertiary w-full flex justify-start">
                    Notes:
                  </p>
                  <textarea
                    name="status Notes"
                    id="statusNotes"
                    rows="3"
                    maxLength="500"
                    value={notes}
                    onChange={handleChangeNotes}
                    placeholder="Write additional information here (optional)"
                    className="w-full p-2 border-2 rounded-lg resize-none"
                  />
                  <div className="text-tertiary w-full flex justify-end">
                    {notes.length} / 500 Characters
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <Button
                      type="submit"
                      text="Create Report"
                      className="w-[30%] text-white hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitSummary}
            className="pt-4 w-full h-[93%] flex flex-col gap-2 bg-yellow-200"
          >
            <div className="flex flex-col bg-blue-400 mb-4">
              <h2 className="font-semibold text-2xl w-full text-center">
                SUMMARY
              </h2>
              <h3 className="font-semibold text-xl w-full text-center">
                SHIFT {shift}
              </h3>
            </div>
            <div className="w-full h-2/3 py-4 border-2">
              <div className="w-full h-1/2 border-2">
                <SwitchButton
                  deviceState={siteStatesButton}
                  onClick={handleSwitchChangeSite}
                />
                <div className="w-full flex flex-row ">
                  {siteTotalScanned.map((item, index) => (
                    <div className="w-[15%] text-center">
                      <Label
                        htmlFor={`totalScan${index}`}
                        text="Total Scanned"
                      />
                      <Input
                        id={`totalScan${index}`}
                        type="number"
                        placeholder="Input here"
                        className="w-[70%] text-center placeholder:text-center px-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-tertiary w-full px-2 flex justify-start">
                    Notes:
                  </p>
                  <textarea
                    name="status Notes"
                    id="statusNotes"
                    rows="3"
                    maxLength="500"
                    value={notes}
                    onChange={handleChangeNotes}
                    placeholder="Write additional information here (optional)"
                    className="w-[98%] mx-2 p-2 border-2 rounded-lg resize-none"
                  />
                  <div className="text-tertiary w-full flex justify-end">
                    {notes.length} / 500 Characters
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <Button
                      type="submit"
                      text="Create Report"
                      className="w-[30%] text-white hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
                    />
                  </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MonitoringPage;
