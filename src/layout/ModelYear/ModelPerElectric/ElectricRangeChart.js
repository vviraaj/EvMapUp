import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data for the chart
const data = [
  { year: "1998", range: 58 },
  { year: "2000", range: 58 },
  { year: "2002", range: 95 },
  { year: "2008", range: 220 },
  { year: "2010", range: 245 },
  { year: "2011", range: 72.78 },
  { year: "2012", range: 71.99 },
  { year: "2013", range: 83.33 },
  { year: "2014", range: 84.37 },
  { year: "2015", range: 100.28 },
  { year: "2016", range: 104.25 },
  { year: "2017", range: 115.42 },
  { year: "2018", range: 160.29 },
  { year: "2019", range: 180.57 },
  { year: "2020", range: 242.02 },
  { year: "2021", range: 11.09 },
  { year: "2022", range: 4.13 },
  { year: "2023", range: 4.31 },
  { year: "2024", range: 17.86 },
  { year: "Grand Total", range: 59.19 },
];

const ElectricRangeChart = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400 sm:text-xl">
            Average Electric Range by Model Year
          </h2>
        </div>

        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 50, left: 20, bottom: 60 }} // Adjusted margins for better visibility
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                angle={-45}
                textAnchor="end"
                tick={{ fontSize: 10 }}
                label={{
                  value: "Model Year",
                  position: "insideBottom",
                  offset: -30, // Adjust offset to position the label nicely
                  fontSize: 12,
                }}
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
                verticalAlign="top"
                wrapperStyle={{ paddingBottom: 20 }}
              />
              <Line
                type="monotone"
                dataKey="range"
                stroke="#1f77b4" // Blue color for the line
                dot={{ stroke: "#1f77b4", strokeWidth: 2 }} // Dotted points with same color
                activeDot={{ r: 6 }} // Larger active dots
                strokeDasharray="3 3" // Dashed line style
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ElectricRangeChart;
