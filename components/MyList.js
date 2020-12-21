import React from "react";
import allTheGirls from "../src/LoadGirls";
import MyDarling from "./MyDarling";
export default function MyList() {
  return (
    <div>
      <p className="navbar"> As pessoas que mais amo no mundo</p>
      <ul>
        <MyDarling aGirl={(allTheGirls[0].name, allTheGirls[0].pic)} />
        <li>Nani</li>
        <li>Taís</li>
      </ul>
    </div>
  );
}
