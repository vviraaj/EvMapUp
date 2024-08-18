import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Data for the pie chart
const data = [
  { name: "Battery Electric Vehicle (BEV)", value: 39461 },
  { name: "Plug-in Hybrid Electric Vehicle (PHEV)", value: 10539 },
];

const COLORS = ["#0088FE", "#FFBB28"]; // Colors for the chart slices

const EVTypeData = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400 sm:text-xl">
            Electric Vehicle Types
          </h2>
        </div>

        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EVTypeData;
