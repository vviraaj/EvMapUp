import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Data for the chart
const data = [
  { name: "ALFA ROMEO", BEV: 0, PHEV: 33 },
  { name: "AUDI", BEV: 75.88, PHEV: 18.47 },
  { name: "AZURE DYNAMICS", BEV: 56, PHEV: 0 },
  { name: "BENTLEY", BEV: 0, PHEV: 21 },
  { name: "BMW", BEV: 22.06, PHEV: 40.53 },
  { name: "CADILLAC", BEV: 0, PHEV: 37.74 },
  { name: "CHEVROLET", BEV: 108.87, PHEV: 45.94 },
  { name: "CHRYSLER", BEV: 0, PHEV: 32.19 },
  { name: "DODGE", BEV: 0, PHEV: 32 },
  { name: "FIAT", BEV: 85.62, PHEV: 0 },
  { name: "FISKER", BEV: 0, PHEV: 33 },
  { name: "FORD", BEV: 3.56, PHEV: 22.0 },
  { name: "GENESIS", BEV: 0, PHEV: 0 },
  { name: "GMC", BEV: 0, PHEV: 0 },
  { name: "HONDA", BEV: 0, PHEV: 46.49 },
  { name: "HYUNDAI", BEV: 18.73, PHEV: 30.66 },
  { name: "JAGUAR", BEV: 197.69, PHEV: 0 },
  { name: "JEEP", BEV: 0, PHEV: 21.93 },
  { name: "KIA", BEV: 54.06, PHEV: 30.56 },
  { name: "LAND ROVER", BEV: 0, PHEV: 25.15 },
  { name: "LEXUS", BEV: 0, PHEV: 37 },
  { name: "LINCOLN", BEV: 0, PHEV: 23.29 },
  { name: "LUCID", BEV: 0, PHEV: 0 },
  { name: "MAZDA", BEV: 0, PHEV: 26 },
  { name: "MERCEDES-BENZ", BEV: 10.5, PHEV: 17.39 },
  { name: "MINI", BEV: 17.22, PHEV: 13.91 },
  { name: "MITSUBISHI", BEV: 62, PHEV: 30.93 },
  { name: "NISSAN", BEV: 82.81, PHEV: 0 },
  { name: "POLESTAR", BEV: 30.39, PHEV: 0 },
  { name: "PORSCHE", BEV: 64.95, PHEV: 14.61 },
  { name: "RIVIAN", BEV: 0, PHEV: 0 },
  { name: "SMART", BEV: 62.41, PHEV: 0 },
  { name: "SUBARU", BEV: 0, PHEV: 17 },
  { name: "TESLA", BEV: 77.06, PHEV: 0 },
  { name: "TH!NK", BEV: 100, PHEV: 0 },
  { name: "TOYOTA", BEV: 21.47, PHEV: 29.09 },
  { name: "VOLKSWAGEN", BEV: 26.45, PHEV: 0 },
  { name: "VOLVO", BEV: 0, PHEV: 24.43 },
  { name: "Grand Total", BEV: 66.83, PHEV: 30.62 },
];

const Manufacturer = () => {
  const grandTotal = data.find((d) => d.name === "Grand Total");

  return (
    <div className="bg-gray-100 p-2">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400  sm:text-xl">
            Average Electric Range by Vehicle Manufacturer
          </h2>
        </div>
        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <div className=" flex gap-5 pb-4 ">
            <p className=" text-[#1f77b4] text-[14px] leading-5 font-bold">
              {`BEV Total: ${grandTotal?.BEV}`}
            </p>
            <p className=" text-[#ff7f0e] text-[14px] leading-5 font-bold">
              {`PHEV Total: ${grandTotal?.PHEV}`}
            </p>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 50, left: 20, bottom: 80 }} // Adjusted margins for better label visibility
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                tick={{ fontSize: 10 }} 
              />
              <YAxis
                label={{
                  value: "Average Range (miles)",
                  angle: -90,
                  position: "insideLeft",
                  dy: -10,
                  fontSize: 12,
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend
                layout="vertical"
                verticalAlign="bottom"
                wrapperStyle={{ bottom: 10 }}
              />
              <Bar
                dataKey="BEV"
                fill="#1f77b4"
                name="Battery Electric Vehicle (BEV)"
              ></Bar>
              <Bar
                dataKey="PHEV"
                fill="#ff7f0e"
                name="Plug-in Hybrid Electric Vehicle (PHEV)"
              ></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
