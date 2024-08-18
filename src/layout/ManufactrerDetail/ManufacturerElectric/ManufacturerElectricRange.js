import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data for the radar chart
const data = [
  { make: "ALFA ROMEO", range: 33 },
  { make: "AUDI", range: 51.63 },
  { make: "AZURE DYNAMICS", range: 56 },
  { make: "BENTLEY", range: 21 },
  { make: "BMW", range: 34.42 },
  { make: "CADILLAC", range: 7.71 },
  { make: "CHEVROLET", range: 89.59 },
  { make: "CHRYSLER", range: 32.19 },
  { make: "DODGE", range: 32 },
  { make: "FIAT", range: 85.62 },
  { make: "FISKER", range: 7.07 },
  { make: "FORD", range: 10.87 },
  { make: "GENESIS", range: 0 },
  { make: "GMC", range: 0 },
  { make: "HONDA", range: 46.49 },
  { make: "HYUNDAI", range: 20.41 },
  { make: "JAGUAR", range: 197.69 },
  { make: "JEEP", range: 21.93 },
  { make: "KIA", range: 47.14 },
  { make: "LAND ROVER", range: 25.15 },
  { make: "LEXUS", range: 22.49 },
  { make: "LINCOLN", range: 23.29 },
  { make: "LUCID", range: 0 },
  { make: "MAZDA", range: 25.77 },
  { make: "MERCEDES-BENZ", range: 11.89 },
  { make: "MINI", range: 16.50 },
  { make: "MITSUBISHI", range: 32.86 },
  { make: "NISSAN", range: 82.81 },
  { make: "POLESTAR", range: 30.39 },
  { make: "PORSCHE", range: 45.23 },
  { make: "RIVIAN", range: 0 },
  { make: "SMART", range: 62.41 },
  { make: "SUBARU", range: 0.66 },
  { make: "TESLA", range: 77.06 },
  { make: "TH!NK", range: 100 },
  { make: "TOYOTA", range: 28.67 },
  { make: "VOLKSWAGEN", range: 26.45 },
  { make: "VOLVO", range: 16.24 },
];

const ManufacturerElectricRange = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400 sm:text-xl">
            Average Electric Range by Make
          </h2>
        </div>

        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={500}>
            <RadarChart outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="make" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis angle={30} domain={[0, 200]} />
              <Legend />
              <Radar
                name="Electric Range"
                dataKey="range"
                stroke="#1f77b4"
                fill="#1f77b4"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerElectricRange;
