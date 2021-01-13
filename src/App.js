import React, { Component } from "react";
import MyInfo from "../components/MyInfo.js";
import MyList from "../components/MyList.js";
import SuperFooter from "../components/SuperFooter";
import "./styles.css";
const TheRightStyle = {
  color: "#FF8C00",
  backgroundColor: "#FF2D00",
  fontSize: "200px"
};

const TheMessage = {
  id: 12,
  text: "eita ferro"
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      girlList: [
        { name: "Lara", nivel: "rainha", pic: "lara01.png" },
        { name: "Nani", nivel: "filha", pic: "nani01.png" },
        { name: "Tais", nivel: "princesa", pic: "tais01.png" }
      ]
    };
  }
  render() {
    const { girlList } = this.state
    return (
      <div className="App">
        <MyInfo />
        <MyList girlList={girlList}/>
        <SuperFooter aMessage={TheMessage} />
      </div>
    );
  }
}
