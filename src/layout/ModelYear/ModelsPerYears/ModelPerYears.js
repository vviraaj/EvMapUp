import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
} from "recharts";

const data = [
  { year: 1998, msrp: 0, range: 58 },
  { year: 2000, msrp: 0, range: 58 },
  { year: 2002, msrp: 0, range: 95 },
  { year: 2008, msrp: 98950, range: 220 },
  { year: 2010, msrp: 110950, range: 245 },
  { year: 2011, msrp: 1643.21608, range: 72.77889447 },
  { year: 2012, msrp: 8003.333333, range: 71.99230769 },
  { year: 2013, msrp: 12514.84716, range: 83.33187773 },
  { year: 2014, msrp: 13842.34136, range: 84.36652079 },
  { year: 2015, msrp: 0, range: 100.2756714 },
  { year: 2016, msrp: 2388.317439, range: 104.25 },
  { year: 2017, msrp: 1062.461538, range: 115.4175824 },
  { year: 2018, msrp: 2566.897605, range: 160.2937439 },
  { year: 2019, msrp: 1677.4414, range: 180.5708155 },
  { year: 2020, msrp: 123.2522796, range: 242.0200608 },
  { year: 2021, msrp: 0, range: 11.08551751 },
  { year: 2022, msrp: 0, range: 4.132471522 },
  { year: 2023, msrp: 0, range: 4.30933238 },
  { year: 2024, msrp: 0, range: 17.86001918 },
  { year: "Grand Total", msrp: 1073.0093, range: 59.19424 },
];

const ModelYearChart = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400 sm:text-xl">
            Average Base MSRP and Electric Range by Model Year
          </h2>
        </div>
        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 50, left: 20, bottom: 80 }} // Adjusted margins for better label visibility
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                angle={-45}
                textAnchor="end"
                tick={{ fontSize: 10 }} // Adjust font size of X-axis labels
              />
              <YAxis
                yAxisId="left"
                label={{
                  value: "Average Base MSRP",
                  angle: -90,
                  position: "insideLeft",
                  dy: -10,
                  fontSize: 12,
                }}
                tick={{ fontSize: 12 }} // Adjust font size of Y-axis labels
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{
                  value: "Average Electric Range (miles)",
                  angle: -90,
                  position: "insideRight",
                  dy: -10,
                  fontSize: 12,
                }}
                tick={{ fontSize: 12 }} // Adjust font size of Y-axis labels
              />
              <Tooltip />
              <Legend
                layout="horizontal"
                verticalAlign="top"
                align="center"
                wrapperStyle={{ top: 0 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="msrp"
                stroke="#1f77b4" // Same blue color as BEV in the bar chart
                dot={{ r: 4 }}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              >
                {data.map((entry, index) => (
                  <Dot
                    key={index}
                    cx={entry.year}
                    cy={entry.msrp}
                    r={4}
                    fill="#1f77b4"
                  />
                ))}
              </Line>
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="range"
                stroke="#ff7f0e" // Same orange color as PHEV in the bar chart
                dot={{ r: 4 }}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              >
                {data.map((entry, index) => (
                  <Dot
                    key={index}
                    cx={entry.year}
                    cy={entry.range}
                    r={4}
                    fill="#ff7f0e"
                  />
                ))}
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ModelYearChart;
