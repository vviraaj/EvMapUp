import React from 'react';
import ModelYearChart from './ModelsPerYears/ModelPerYears';
import ElectricRangeChart from './ModelPerElectric/ElectricRangeChart';

export const ModelYear = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full items-center">
      <div className="sm:w-1/2 w-full p-2">
        <ModelYearChart />
      </div>
      <div className="sm:w-1/2 w-full p-2">
        <ElectricRangeChart />
      </div>
    </div>
  );
};
