import React from "react";

import { createRoot } from "react-dom/client";

import "./styles.css";

const root = createRoot(document.getElementById("root"));

const date = new Date();
const time = date.getHours();

let greeting;

let changeColor = {};

if (time >= 1 && time < 12) {
  greeting = "Good Morning";
  changeColor.color = "green";
} else if (time >= 12 && time < 16) {
  greeting = "Good Afternoon";
  changeColor.color = "blue";
} else if (time >= 16 && time < 20) {
  greeting = "Good Evening";
  changeColor.color = "orange";
} else if (time >= 20 || time < 1) {
  greeting = "Good Night";
  changeColor.color = "grey";
}

root.render(
  <>
    <div className="outer__box">
      <div className="box">
        <h1>
          Hello There,<span style={changeColor}>{greeting}</span>
        </h1>
        <span>{`${date}`}</span>
      </div>
    </div>
  </>
);
