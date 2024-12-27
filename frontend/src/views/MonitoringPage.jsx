import React, { useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";

// component
import PageName from "../components/PageName";
import DeviceCheckBox from "../components/DeviceCheckBox";
import OptionButton from "../components/OptionButton";
import Label from "../components/Label";
import UploadImage from "../components/UploadImage";
import Button from "../components/Button";

const MonitoringPage = () => {
  const [loading, setLoading] = useState(false);
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
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const previewUrl = URL.createObjectURL(compressedFile);

      // Update the corresponding device image in the array
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

  //   const [preview, setPreview] = useState(null);
  //   const [compressedImage, setCompressedImage] = useState(null);
  //   const [fileName, setFileName] = useState("No File Choosen");
  //   const [inputKey, setInputKey] = useState(0);
  //   const fileInputRef = useRef(null);
  //   const handleImageUpload = async (event) => {
  //     event.preventDefault();
  //     const file = event.target.files[0];
  //     if (!file) {
  //       console.log("Please select an image file.");
  //       return;
  //     }

  //     // Compression options
  //     const options = {
  //       maxSizeMB: 0.5, // Maximum size in MB
  //       maxWidthOrHeight: 1920, // Max width/height for resizing
  //       useWebWorker: true,
  //     };

  //     try {
  //       console.log(loading, "loading in handle");
  //       const compressedFile = await imageCompression(file, options);
  //       setFileName(file.name);

  //       // Update state with compressed file
  //       setCompressedImage(compressedFile);

  //       // Generate a preview URL for the compressed image
  //       const previewUrl = URL.createObjectURL(compressedFile);
  //       setPreview(previewUrl);
  //     } catch (error) {
  //       console.error("Error compressing the image:", error);
  //       console.log("Failed to compress the image.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const handleCancelUpload = async (event) => {
  //     event.preventDefault();
  //     try {
  //       setPreview(null);
  //       setCompressedImage(null);
  //       setFileName("No File Ch0osen");
  //       setInputKey((prevKey) => prevKey + 1);

  //       if (fileInputRef.current) {
  //         fileInputRef.current.value = null;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // submit report
  const handleSubmitReport = (event) => {
    event.preventDefault();
    try {
      //   console.log(shift, "submitted shift");
      //   console.log(time, "submitted time");
      //   console.log(site, "submitted site");
      //   console.log(deviceStates, "submitted deviceState");
      //   console.log(notes, "submitted deviceState");
      //   console.log(deviceImages, "submitted image");
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
    // console.log(deviceStates, "deviceStates in hooks");
    // console.log(deviceImages, "deviceImages in hooks");
  }, [deviceImages]);
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
              {/* <UploadImage
                imgSrc={preview}
                onChange={handleImageUpload}
                onClick={handleCancelUpload}
                fileName={fileName}
                loadingState={loading}
                inputKey={inputKey}
                fileInputRef={fileInputRef}
              /> */}
              <ul className="w-full my-2 flex flex-row justify-around">
                {deviceImages.map((device, index) => {
                  return (
                    <UploadImage
                      key={index} // Unique key for each device
                      imgSrc={device.preview}
                      onChange={handleDevicesImageUpload}
                      fileName={device.fileName}
                      onClick={handleDevicesCancelUpload}
                      loadingState={false} // Update this if you have a loading state
                      inputKey={device.inputKey}
                      fileInputRef={fileInputRefs.current[index]}
                      index={index}
                    />
                  );
                })}
              </ul>
              <p className="text-tertiary w-full flex justify-start">Notes:</p>
              <textarea
                name="status Notes"
                id="statusNotes"
                rows="3"
                maxLength="500"
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
