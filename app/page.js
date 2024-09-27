import React from "react";
import AppInfoCard from "./components/appInfocard";
import appData from '@/app/home.json';
import Expertise from "./components/exptertise";
function Page() {
  return (
    <div>
      <div className="">
        <AppInfoCard appData={appData} />
      </div>
    </div>
  );
}

export default Page;
