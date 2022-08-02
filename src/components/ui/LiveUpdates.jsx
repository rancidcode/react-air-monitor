import LiveBox from "./LiveBox";

import { WiDust } from "react-icons/wi";
import { MdOutlineAir } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";

const LiveUpdates = ({ data }) => {
  const style = { color: "gray", fontSize: "2em" };
  return (
    <div className="live-updates">
      <h3>Current Reports</h3>
      <div className="date-container">
        Latest Report: {data.date} {data.time}
      </div>
      <div className="box-container">
        <LiveBox
          name="Heat Index"
          value={data.heatIndex.toFixed(2)}
          unit="C"
          icon={<TbTemperature style={style} />}
        />
        <LiveBox
          name="Air Quality"
          value={data.airQuality.toFixed(2)}
          unit="ppm"
          icon={<MdOutlineAir style={style} />}
        />
        <LiveBox
          name="Dust Density"
          value={data.dustDensity.toFixed(2)}
          unit="ug/m3"
          icon={<WiDust style={style} />}
        />
      </div>
    </div>
  );
};

export default LiveUpdates;
