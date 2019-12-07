import React from "react";
// import "./Button.scss";

const button = props => (
  <button
    type="button"
    className={props.showButton ? "Button visible" : "Button"}
    onClick={props.clicked}
    data-type={props.buttonType}
    disabled={props.disabled}
  >
    {props.textContent}
  </button>
);

export default button;
