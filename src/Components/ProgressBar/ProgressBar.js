import React from "react";
import "./ProgressBar.scss";
// import PropTypes from "prop-types";

const progressBar = props => {
  // console.log(props);

  // Object.values(props).forEach(value => {
  //   console.log(value);
  // });

  return (
    <>
      <br />
      <label htmlFor={props.name}>{props.name}</label>
      <br />
      <progress id={props.name} max="100" value="70"></progress>
    </>
  );
};

// progressBar.propTypes = {
//   menuClicked: PropTypes.func
// };

export default progressBar;
