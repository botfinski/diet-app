import React from "react";
import "./ProgressBar.scss";
// import PropTypes from "prop-types";

const progressBar = props => {
  // console.log(props);

  return (
    <>
      <br />
      <label htmlFor={props.name}>{props.name} {props.value}</label>
      <br />
      <progress id={props.name} max="100" value={props.value}></progress>
    </>
  );
};

// progressBar.propTypes = {
//   menuClicked: PropTypes.func
// };

export default progressBar;
