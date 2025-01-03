import React from "react";

// component
import PageName from "../components/PageName";
import Label from "../components/Label";
import Input from "../components/Input";

const CorrectivePage = () => {
  return (
    // <LoadingScreen />

    <div className="pl-[15%] pt-[3.3%] ml-2 h-screen">
      <div className="m-4 h-[95%] text-tertiary bg-yellow-400">
        <div className="h-[7%] flex justify-start">
          <PageName
            text="CORRECTIVE MAINTENANCE REPORT"
            className="h-full flex flex-col justify-center text-center"
          />
        </div>
        <form className="bg-blue-400 h-[93%] w-full">
          <div>
            <Label
              htmlFor="reportedIssue"
              className="w-full flex justify-start font-semibold"
              text="Reported Issue:"
            />
            <Input
              type="text"
              name="reportedIssue"
              // onChange={}
              className="text-tertiary w-[40%] text-start placeholder:text-sm lg:placeholder:text-[10px] placeholder:text-center"
              // placeholder={""}
            />
            <Label
              htmlFor="site"
              className="w-full flex justify-start font-semibold"
              text="Site Name:"
            />
            <Input
              type="text"
              name="site"
              // onChange={}
              className="text-tertiary w-[40%] text-start placeholder:text-sm lg:placeholder:text-[10px] placeholder:text-center"
              // placeholder={""}
            />
            <Label
              htmlFor="reportedBy"
              className="w-full flex justify-start font-semibold"
              text="Reported By:"
            />
            <Input
              type="text"
              name="reportedBy"
              // onChange={}
              className="text-tertiary w-[40%] text-start placeholder:text-sm lg:placeholder:text-[10px] placeholder:text-center"
              // placeholder={""}
            />
            <Label
              htmlFor="dateOfReport"
              className="w-full flex justify-start font-semibold"
              text="Date of Report:"
            />
            <Input
              type="datetime-local"
              name="dateOfReport"
              // onChange={}
              className="text-tertiary w-[40%] text-start placeholder:text-sm lg:placeholder:text-[10px] placeholder:text-center"
              // placeholder={""}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorrectivePage;
