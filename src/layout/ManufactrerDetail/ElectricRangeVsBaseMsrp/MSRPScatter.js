import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data for the scatter chart
const data = [
  { msrp: 0, range: 57.92 },
  { msrp: 31950, range: 93 },
  { msrp: 32250, range: 93 },
  { msrp: 33950, range: 111 },
  { msrp: 34995, range: 17 },
  { msrp: 36800, range: 12 },
  { msrp: 36900, range: 12 },
  { msrp: 39995, range: 32 },
  { msrp: 43700, range: 14 },
  { msrp: 44100, range: 14 },
  { msrp: 45600, range: 14 },
  { msrp: 52650, range: 16 },
  { msrp: 52900, range: 17 },
  { msrp: 53400, range: 16 },
  { msrp: 54950, range: 14 },
  { msrp: 55700, range: 15 },
  { msrp: 59900, range: 265 },
  { msrp: 64950, range: 19 },
  { msrp: 69900, range: 208 },
  { msrp: 75095, range: 31 },
  { msrp: 81100, range: 14 },
  { msrp: 89100, range: 14 },
  { msrp: 90700, range: 14 },
  { msrp: 91250, range: 14 },
  { msrp: 98950, range: 220 },
  { msrp: 102000, range: 33 },
  { msrp: 109000, range: 245 },
  { msrp: 110950, range: 245 },
  { msrp: 184400, range: 14 },
];

const MSRPScatter = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-tight text-blue-400 sm:text-xl">
            Base MSRP vs. Average Electric Range
          </h2>
        </div>

        <div className="mt-2 bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={500}>
            <ScatterChart
              margin={{ top: 20, right: 50, left: 20, bottom: 60 }} // Adjust margins for better visibility
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="msrp"
                name="Base MSRP"
                unit="$"
                label={{
                  value: "Base MSRP ($)",
                  position: "insideBottom",
                  offset: -10,
                  fontSize: 12,
                }}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                dataKey="range"
                name="Average Range"
                unit=" miles"
                label={{
                  value: "Average Electric Range (miles)",
                  angle: -90,
                  position: "insideLeft",
                  dy: -10,
                  fontSize: 12,
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend
                verticalAlign="top"
                wrapperStyle={{ paddingBottom: 20 }}
              />
              <Scatter
                name="Electric Range"
                data={data}
                fill="#1f77b4"
                line={{ stroke: "#1f77b4", strokeWidth: 2 }}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MSRPScatter;
