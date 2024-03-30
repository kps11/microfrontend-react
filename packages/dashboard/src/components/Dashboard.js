import React, { useEffect } from "react";

function Dashboard(props) {
  useEffect(() => {
    const minEl = document.querySelector(".min");
    const secEl = document.querySelector(".sec");
    const hourEl = document.querySelector(".hour");

    setInterval(() => {
      const date = new Date();
      const secDeg = (date.getSeconds() / 60) * 360 - 90;
      const mincDeg = (date.getMinutes() / 60) * 360 - 90;
      const hourDeg = (date.getHours() / 12) * 360 - 90;
      minEl.style.transform = `rotate(${mincDeg}deg)`;
      secEl.style.transform = `rotate(${secDeg}deg)`;
      hourEl.style.transform = `rotate(${hourDeg}deg)`;
    }, 1000);
  }, []);
  return (
    <section>
      <div className="clock">
        <div className="hour"></div>
        <div className="min"></div>
        <div className="sec"></div>
      </div>
    </section>
  );
}

export default Dashboard;
