import React from "react";
import {
  CartesianGrid,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = ({ dataset }) => {
  const [selected, setSelected] = React.useState("airQuality");

  let data = [];
  for (let i = dataset.length - 10; i < dataset.length; i++) {
    data.push({
      name: dataset[i].time.substring(0, 5),
      heatIndex: dataset[i].heatIndex,
      airQuality: dataset[i].airQuality,
      dustDensity: dataset[i].dustDensity,
    });
  }
  return (
    <div className="chart">
      <h3>Chart</h3>
      <div className="box-container white-border">
        <div className="title">
          <h4>Real Time Incoming Data</h4>
          <select
            onChange={(event) => setSelected(event.target.value)}
            value={selected}
          >
            <option value="heatIndex">Heat Index</option>
            <option value="airQuality">Air Quality</option>
            <option value="dustDensity">Dust Density</option>
          </select>
        </div>

        <AreaChart
          width={700}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ecde9e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={selected}
            stroke="#bea062"
            fillOpacity={1}
            fill="url(#colorUv)"
            dot={{
              stroke: "#394656",
              strokeWidth: 1,
              r: 1,
              strokeDasharray: "",
            }}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Chart;

// domain={[26.5, 28]}
