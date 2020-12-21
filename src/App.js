import React from "react";
import "./styles.css";
import MyInfo from "../components/MyInfo.js";
import MyList from "../components/MyList.js";
import SuperFooter from "../components/SuperFooter";
import ListOfGirls from "./LoadGirls";
const TheRightStyle = {
  color: "#FF8C00",
  backgroundColor: "#FF2D00",
  fontSize: "200px"
};

const TheMessage = {
  id: 12,
  text: "eita ferro"
};

export default function App() {
  return (
    <div className="App">
      <MyInfo />
      <MyList />
      <SuperFooter aMessage={TheMessage} />
    </div>
  );
}
