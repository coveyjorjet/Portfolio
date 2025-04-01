import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Embedded Software Engineer",
          "Firmware Developer",
          "WiFi Systems Specialist",
          "Open Source Contributor",
          "Networking Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
