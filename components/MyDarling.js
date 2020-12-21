import React from "react";

export default function MyDarling(aGirl) {
  return (
    <li>
      <div className="girlname">{aGirl.name}</div>
      <div className="girlfoto">
        <img src={aGirl.pic} alt="óia só!">
          {" "}
        </img>
      </div>
    </li>
  );
}
