import React from "react";

import moment from "moment";

export function GetRealTime() {
  const locale = "en-US";
  const timeZone = "Europe/London";

  const [realTime, setRealTime] = React.useState(
    moment(
      Date.parse(new Date().toLocaleString(locale, { timeZone: timeZone }))
    ).format("YYYY-MM-DD HH:mm:ss")
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      let localTime = Date.parse(
        new Date().toLocaleString(locale, { timeZone: timeZone })
      );
      let localTimeStr = moment(localTime).format("YYYY-MM-DD HH:mm:ss");
      setRealTime(localTimeStr);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return realTime;
}
