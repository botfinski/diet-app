import React from "react";
import "./Button.scss";

const button = props => (
  <button
    type="button"
    className={props.className ? "Button " + props.className : "Button"}
    onClick={props.clicked}
    data-action={props.action}
    disabled={props.disabled}
  >
    {props.textContent}
  </button>
);

export default button;
