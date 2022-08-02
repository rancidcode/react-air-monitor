import React from "react";
import mqtt from "precompiled-mqtt";

import LiveUpdates from "../ui/LiveUpdates";
import Navbar from "../ui/Navbar";

const Websocket = () => {
  const [message, setMessage] = React.useState("");

  const mqttSub = () => {
    const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
    const topic = "nJkluYodOpQg9iu76";

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
      <div id="main">
        <div className="main-top">
          <LiveUpdates data={message} />
        </div>
      </div>
    </div>
  );
};

export default Websocket;
