import React, { useState } from "react";
import ReactDOM from "react-dom";
import CreateScale from "./components/CreateScale";


window.addEventListener("load", () => {
  const divsToUpdate = document.querySelectorAll(".scale-plugin-wrapper");

  divsToUpdate.forEach((div) => {
    ReactDOM.render(<Scale/>, div);
    div.classList.remove("scale-plugin-wrapper");
  });
});


function Scale() {
  return (
    <CreateScale/>
  );
}
