import React from "react";
import EvByCounty from "./EvByCounty/EvByCounty";
import EVTypeData from "./EvType/EvTypeBiFurication";


export const EvTypeDetails = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full items-center">
      <div className="sm:w-1/2 w-full p-2">
        <EVTypeData />
      </div>
      <div className="sm:w-1/2 w-full p-2">
        <EvByCounty />
      </div>
    </div>
  );
};
