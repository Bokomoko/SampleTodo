import React from "react";

export default function SuperFooter(aMessage) {
  const quando = new Date();
  console.log(aMessage);
  return <footer> {quando.toISOString()} </footer>;
}
