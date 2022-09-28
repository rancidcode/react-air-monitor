import React from "react";
import mqtt from "precompiled-mqtt";

import Navbar from "../ui/Navbar";
import Main from "../ui/Main";

const Dashboard = () => {
  const [message, setMessage] = React.useState("");
  const data = {
    date: "00/00/00",
    time: "00:00:00",
    heatIndex: 0,
    airQuality: 0,
    dustDensity: 0,
  };

  const mqttSub = () => {
    const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
    const topic = "anytopic";

    client.on("connect", () => {
      console.log("connected");
      client.subscribe(topic);
    });
    client.on("message", (topic, message) => {
      message = message.toString();
      console.log(message);

      const JSONmessage = JSON.parse(message.toString());
      setMessage(JSONmessage);
    });
  };

  React.useEffect(() => {
    mqttSub();
  }, []);

  return (
    <div id="whole-page">
      <Navbar id="dashboard" />
      <Main data={!message ? data : message} />
    </div>
  );
};

export default Dashboard;
