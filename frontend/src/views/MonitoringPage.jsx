import React from "react";

// component
import PageName from "../components/PageName";
import Label from "../components/Label";
import Button from "../components/Button";

const MonitoringPage = () => {
  return (
    // <LoadingScreen />

    <div className="pl-[15%] pt-[3.3%] h-screen">
      <div className="m-4 h-[96.7%] text-tertiary">
        <PageName text="MONITORING REPORT" className="" />
        <form className="p-4 w-full h-[90%] border-2 rounded-lg">
          <Label htmlFor="shift" text="SHIFT" className="" />
          <div className="w-fit rounded-3xl">
            <Button text="1" className="px-6 w-fit bg-red-400 hover:bg-red-600 rounded-s-3xl rounded-e-none"/>
            <Button text="2" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="3" className="px-6 w-fit bg-yellow-400 hover:bg-yellow-600 rounded-e-3xl rounded-s-none"/>
          </div>
          <Label htmlFor="time" text="TIME" className="" />
          <div className="w-fit rounded-3xl">
            <Button text="07:00:00" className="px-6 w-fit bg-red-400 hover:bg-red-600 rounded-s-3xl rounded-e-none"/>
            <Button text="09:00:00" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="11:00:00" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="13:00:00" className="px-6 w-fit bg-yellow-400 hover:bg-yellow-600 rounded-e-3xl rounded-s-none"/>
          </div>
          <Label htmlFor="site" text="SITE" className="" />
          <div className="w-fit rounded-3xl">
            <Button text="JICT IMPORT A" className="px-6 w-fit bg-red-400 hover:bg-red-600 rounded-s-3xl rounded-e-none"/>
            <Button text="JICT IMPORT A" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="JICT EXPORT" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="KOJA IMPORT" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="KOJA EXPORT" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="MTI EXPORT" className="px-6 w-fit bg-green-400 rounded-none"/>
            <Button text="GRAHA" className="px-6 w-fit bg-yellow-400 hover:bg-yellow-600 rounded-e-3xl rounded-s-none"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MonitoringPage;
