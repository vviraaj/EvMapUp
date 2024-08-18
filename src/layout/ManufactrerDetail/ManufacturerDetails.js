import React from "react";
import ManufacturerElectricRange from "./ManufacturerElectric/ManufacturerElectricRange";
import MSRPScatter from "./ElectricRangeVsBaseMsrp/MSRPScatter";

export const ManufacturerDetails = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full items-center">
      <div className="sm:w-1/2 w-full p-2">
        <MSRPScatter />
      </div>
      <div className="sm:w-1/2 w-full p-2">
        <ManufacturerElectricRange />
      </div>
    </div>
  );
};
