import React from "react";

import { GetRealTime } from "./getRealTime";

function RealTime() {
  let realTime = GetRealTime();
  return (
    <div>
      <h3 style={{ fontSize: "3vmin" }}>{realTime}</h3>
    </div>
  );
}

export default RealTime;
