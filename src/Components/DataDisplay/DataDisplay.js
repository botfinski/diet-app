import React from "react";
// import PropTypes from "prop-types";
import "./DataDisplay.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

const dataDisplay = props => {
  console.log(props);

  return (
    <div className="Data-Display">
      {props.nutritionsNames.map(name => {
        return <ProgressBar name={name} data={props.data} key={name} />;
      })}
    </div>
  );
};

// dataDisplay.propTypes = {
//   nutritionData: PropTypes.shape({
//     name: PropTypes.string,
//     kcal: PropTypes.number,
//     protein: PropTypes.number,
//     carbohydrates: PropTypes.number,
//     sugar: PropTypes.number,
//     fat: PropTypes.number,
//     saturated: PropTypes.number,
//     salt: PropTypes.number
//   }),
//   userData: PropTypes.shape({
//     username: PropTypes.string,
//     weight: PropTypes.number,
//     heigth: PropTypes.number,
//     kcal: PropTypes.number
//   })
// };

export default dataDisplay;
