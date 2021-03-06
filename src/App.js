import React from "react";
import "./styles.css";
import MyInfo from "../components/MyInfo.js";
import MyList from "../components/MyList.js";

export default function App() {
  return (
    <div className="App">
      <h1>Greetings Earthlings!</h1>
      <h2>I come in peace!</h2>
      <MyInfo />
      <MyList />
    </div>
  );
}
