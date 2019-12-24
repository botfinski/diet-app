import React from "react";
import Header from "../Header/Header";
import DataDisplay from "../DataDisplay/DataDisplay";
// import Chart from "../Chart/Chart";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import "./Diet.scss";

const diet = props => {
  // console.log(props)

  return (
    <div className="Diet">
      <Header clicked={props.handleButtonClicks} menuOpened={props.menuOpened} />
      <DataDisplay
        foodList={props.foodList}
        // nutritionData={props.nutritionData}
        nutritionsNames={props.nutritionsNames}
        data={props.data}
        userData={props.userData}
      />
      {/* <Chart /> */}
      <Button className="add-food-button" clicked={props.handleButtonClicks} textContent="+" action="toggle-modal" />
      <Backdrop showBackdrop={props.modalOpened}>
        <Modal modalOpened={props.modalOpened} clicked={props.handleButtonClicks} addNutrition={props.addNutrition} />
      </Backdrop>
    </div>
  );
};

diet.propTypes = {
  handleButtonClicks: PropTypes.func,
  menuOpened: PropTypes.bool,
  userData: PropTypes.object,
  nutritionData: PropTypes.object,
  addNutrition: PropTypes.func
};

export default diet;
