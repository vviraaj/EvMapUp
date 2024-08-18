import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Label, Legend } from "recharts";

// Data for the area chart
const data = [
  { name: "Chelan", average: 155.8 },
  { name: "Clallam", average: 62.75 },
  { name: "Clark", average: 59.13 },
  { name: "Cowlitz", average: 63.2 },
  { name: "Grant", average: 76.83 },
  { name: "Island", average: 55.49 },
  { name: "Jefferson", average: 69.06 },
  { name: "King", average: 58.86 },
  { name: "Kitsap", average: 64.60 },
  { name: "Kittitas", average: 104.67 },
  { name: "Klickitat", average: 107.67 },
  { name: "Pend Oreille", average: 19 },
  { name: "Skagit", average: 90.5 },
  { name: "Snohomish", average: 52.78 },
  { name: "Spokane", average: 104 },
  { name: "Stevens", average: 72.55 },
  { name: "Thurston", average: 65.49 },
  { name: "Walla Walla", average: 78.75 },
  { name: "Whitman", average: 26.8 },
  { name: "Yakima", average: 60.99 },
];

const EvByCounty = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400 sm:text-xl">
            Average Electric Range by County
          </h2>
        </div>

        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                tick={{ fontSize: 10 }}
                interval={0}
              >
                <Label 
                  value="County" 
                  offset={-10} 
                  position="insideBottomRight" 
                  style={{ textAnchor: 'middle', fontSize: 12 }}
                />
              </XAxis>
              <YAxis 
                tick={{ fontSize: 10 }}
              >
                <Label 
                  value="Average Electric Range" 
                  angle={-90} 
                  position="insideLeft" 
                  style={{ textAnchor: 'middle', fontSize: 12 }}
                />
              </YAxis>
              <Tooltip />
              <Legend 
                layout="horizontal" 
                verticalAlign="top" 
                align="center" 
               
              />
              <Area 
                type="monotone" 
                dataKey="average" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EvByCounty;
