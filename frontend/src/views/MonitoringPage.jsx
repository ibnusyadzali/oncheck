import React, { useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";

// component
import PageName from "../components/PageName";
import OptionButton from "../components/OptionButton";
import Label from "../components/Label";
import UploadImage from "../components/UploadImage";
import Button from "../components/Button";
import SwitchButton from "../components/SwitchButton";
import Input from "../components/Input";

const MonitoringPage = () => {
  const [loading, setLoading] = useState(false);
  // shift button
  const [shift, setShift] = useState(1);
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

  const [deviceStatesButton, setDeviceStatesButton] = useState([
    { deviceName: "PLC", state: true },
    { deviceName: "DAQ", state: true },
    { deviceName: "WIM", state: true },
    { deviceName: "OCR", state: true },
    { deviceName: "RPM", state: true },
  ]);
  const handleSwitchChange = (event, index) => {
    event.preventDefault();
    setDeviceStatesButton((prevState) => {
      const updated = [...prevState];
      updated[index] = {
        ...updated[index],
        state: !updated[index].state, // Toggle the state value
      };
      return updated;
    });
  };

  // device status notes
  const deviceNotesInput = {
    notes: "",
  };
  const [deviceNotes, setdeviceNotes] = useState(deviceNotesInput);
  const handleChangeNotes = (event) => {
    const { name, value } = event.target;
    setdeviceNotes((prevNotes) => ({
      ...prevNotes,
      [name]: value, // Dynamically update the key based on `name`
    }));
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
      const devicesStatus = deviceStatesButton.map((device, index) => {
        const data = {
          deviceId: index + 1,
          deviceName: device.deviceName,
          deviceState: device.state,
          deviceStateImageFile: deviceImages[index].compressedImage,
          deviceStatePreviewImage: deviceImages[index].preview,
        };

        return data;
      });
      const submittedMonitoringReport = {
        user: "username",
        shift,
        reportTime: time,
        createdReportTime: new Date().toLocaleString(),
        site,
        notes: deviceNotes.notes,
        devicesStatus,
      };

      console.log(submittedMonitoringReport);
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------------------------------------------------------------
  const [siteStatus, setSiteStatus] = useState([
    { siteName: "JICT Import A", totalScan: 0, state: true },
    { siteName: "JICT Import B", totalScan: 0, state: true },
    { siteName: "JICT Export", totalScan: 0, state: true },
    { siteName: "KOJA Import", totalScan: 0, state: true },
    { siteName: "KOJA Export", totalScan: 0, state: true },
    { siteName: "MTI CA Export", totalScan: 0, state: true },
    { siteName: "GRAHA SEGARA", totalScan: 0, state: true },
  ]);
  // site state
  const handleSwitchChangeSite = (event, index) => {
    event.preventDefault();
    setSiteStatus((prevState) => {
      const updated = [...prevState];
      updated[index] = {
        ...updated[index],
        state: !updated[index].state, // Toggle the state value
      };
      return updated;
    });
  };

  // total scan
  const handleScannedInput = (event, index) => {
    const { id, value } = event.target; // Get the input's id and value
    let validValue = value;
    if (validValue.startsWith("0") && validValue.length > 1) {
      validValue = validValue.slice(1);
    }
    setSiteStatus((prevState) => {
      const updatedStatus = [...prevState];
      updatedStatus[index] = {
        ...updatedStatus[index],
        totalScan: validValue,
      };
      return updatedStatus;
    });
  };

  // site status notes
  const siteNotesInput = {
    notes: "",
  };
  const [siteNotes, setSiteNotes] = useState(siteNotesInput);
  const handleChangeSiteNotes = (event) => {
    const { name, value } = event.target;
    setSiteNotes((prevNotes) => ({
      ...prevNotes,
      [name]: value, // Dynamically update the key based on `name`
    }));
  };
  // submit summary
  const handleSubmitSummary = (event) => {
    event.preventDefault();
    try {
      const sitesStatus = siteStatus.map((site, index) => {
        const data = {
          siteId: index + 1,
          siteName: site.siteName,
          siteTotalScan: site.totalScan,
          siteState: site.state,
        };

        return data;
      });
      const submittedSummaryReport = {
        shift,
        createdReportTime: new Date().toLocaleString(),
        sitesStatus,
        notes: siteNotes.notes,
      };
      console.log(submittedSummaryReport);
    } catch (error) {
      console.log(error);
    }
  };

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
    // console.log(deviceStatesButton, "deviceStates in hooks");
    // console.log(siteStatus, "siteStatus in hooks");
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
          <div className="w-[15%] h-[75%] flex flex-col gap-1 mt-2">
            <p className="w-full text-center font-semibold">Page Mode</p>
            <div className="w-full h-[75%] flex flex-row font-semibold rounded-lg hover:ring-2 hover:border-0 hover:ring-tertiary duration-200">
              <button
                className={`w-[50%] border-s-2 hover:bg-slate-200 hover:text-tertiary border-y-2 rounded-s-lg duration-200
                    ${pageMode && "bg-slate-600 text-text1"}`}
                onClick={(event) => handleTogglePage(event, true)}
              >
                Report
              </button>
              <button
                className={`w-[50%] border-e-2 hover:bg-slate-200 hover:text-tertiary border-y-2 rounded-e-lg duration-200
                     ${!pageMode && "bg-slate-600 text-text1"}`}
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
                <div className="w-full h-[60%]">
                  <ul className="w-full h-[25%] my-1 flex flex-row justify-between ">
                    {deviceStatesButton.map((device, index) => {
                      return (
                        <SwitchButton
                          key={index}
                          name={device.deviceName}
                          state={device.state}
                          onClick={handleSwitchChange}
                          index={index}
                          textOk="Normal"
                          textNotOk="Down"
                          labelClassname= "uppercase"
                        />
                      );
                    })}
                  </ul>
                  <ul className="w-full h-[70%] flex flex-row justify-between">
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
                <div className="w-full h-[40%]">
                  <p className="text-tertiary w-full flex justify-start">
                    Notes:
                  </p>
                  <textarea
                    name="notes"
                    id="statusNotes"
                    rows="3"
                    maxLength="500"
                    value={deviceNotes.notes}
                    onChange={handleChangeNotes}
                    placeholder="Write additional information here (optional)"
                    className="w-full p-2 border-2 rounded-lg resize-none"
                  />
                  <div className="text-tertiary w-full flex justify-end">
                    {deviceNotes.notes.length} / 500 Characters
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <Button
                      type="submit"
                      text="Create Report"
                      className="w-[30%] text-text1 hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitSummary}
            className="pt-4 w-full h-[85%] flex flex-col mt-[3%] gap-[5%] border-2 rounded-lg"
          >
            <div className="flex flex-col h-[10%]">
              <h2 className="font-semibold text-2xl w-full text-center">
                SUMMARY REPORT
              </h2>
              <h3 className="font-semibold text-xl w-full text-center">
                {`SHIFT: ${shift} DATE: ${new Date().toLocaleDateString()}`}
              </h3>
            </div>
            <div className="w-full h-[90%]">
              <div className="w-full h-1/3">
                <ul className="w-full h-[38%] my-1 flex flex-row justify-between">
                  {siteStatus.map((site, index) => {
                    return (
                      <SwitchButton
                        key={index}
                        name={site.siteName}
                        state={site.state}
                        onClick={handleSwitchChangeSite}
                        index={index}
                        textOk="Normal"
                        textNotOk="Down"
                      />
                    );
                  })}
                </ul>
                <div className="w-full h-[45%] flex flex-row ">
                  {siteStatus.map((site, index) => (
                    <div key={index} className="w-[15%] text-center">
                      <Label
                        htmlFor={`totalScan${index}`}
                        text="Total Scanned"
                      />
                      <Input
                        index={index}
                        min={0}
                        name="totalScaned"
                        id={`totalScan${index}`}
                        type="number"
                        value={site.totalScan}
                        placeholder="Input here"
                        className="w-[70%] text-center placeholder:text-center px-0"
                        onChange={handleScannedInput}
                        onKeyDown={(event) => {
                          // Prevent invalid characters like 'e', '+', and '-'
                          if (["e", "E", "+", "-"].includes(event.key)) {
                            event.preventDefault();
                          }
                          // Prevent Enter key from propagating and triggering other elements
                          if (event.key === "Enter") {
                            event.preventDefault();
                            event.stopPropagation();
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <div className="w-[97%] mx-auto">
                  <p className="text-tertiary w-full px-2 flex justify-start">
                    Notes:
                  </p>
                  <textarea
                    name="notes"
                    id="siteNotes"
                    rows="8"
                    maxLength="500"
                    value={siteNotes.notes}
                    onChange={handleChangeSiteNotes}
                    placeholder="Write additional information here (optional)"
                    className="p-2 w-full border-2 rounded-lg resize-none flex"
                  />
                  <div className="text-tertiary w-full flex justify-end">
                    {siteNotes.notes.length} / 500 Characters
                  </div>
                </div>
                <div className="w-full flex justify-center mt-2">
                  <Button
                    type="submit"
                    text="Create Summary Report"
                    className="w-[30%] text-text1 hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MonitoringPage;
