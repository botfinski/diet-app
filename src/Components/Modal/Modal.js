import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import Button from "../Button/Button";

class Modal extends Component {
  state = {
    formValid: false,
    foodData: {
      name: "",
      kcal: 0,
      protein: 0,
      carbohydrates: 0,
      sugar: 0,
      fat: 0,
      saturated: 0,
      salt: 0
    }
  };

  resetFoodObject = this.resetFoodObject.bind(this);
  resetFoodObject() {
    console.log("reset");
    let tempObj = { ...this.state.foodData };

    Object.keys(tempObj).map(key => {
      if (typeof tempObj[key] === "string") {
        tempObj[key] = "";
      } else {
        tempObj[key] = 0;
      }

      return tempObj;
    });

    this.setState({ foodData: tempObj });
  }

  closeModal = this.closeModal.bind(this);
  closeModal(e) {
    if (!this.state.formValid) {
      let fields = [...document.querySelectorAll("input")];

      fields.map(field => {
        return field.classList.remove("error");
      });
    }

    this.resetFoodObject();
    this.props.clicked(e);
  }

  handleForm = this.handleForm.bind(this);
  handleForm(e) {
    console.log("handleForm");
    let tempObj = { ...this.state.foodData },
      fields = [...document.querySelectorAll("input")];

    fields.map(field => {
      return field.type === "number" ? (tempObj[field.id] = Number(field.value)) : (tempObj[field.id] = field.value);
    });

    this.setState({ foodData: tempObj });
  }

  showErrors = this.showErrors.bind(this);
  showErrors(errors) {
    console.log(errors);
    let fields = [...document.querySelectorAll("input")];

    fields.map(field => {
      if (errors.includes(field.id)) {
        return field.classList.add("error");
      } else {
        return field.classList.remove("error");
      }
    });
  }

  validateForm = this.validateForm.bind(this);
  validateForm(e) {
    e.preventDefault();

    let formData = Object.values(this.state.foodData),
      errors = [];

    console.log(this.state.foodData);

    if (!formData.includes(0) && !formData.includes("")) {
      this.props.addNutrition(this.state.foodData);
      this.resetFoodObject();
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });

      console.log(this.state.foodData);

      for (let key in this.state.foodData) {
        if (!this.state.foodData[key]) {
          errors.push(key);
        }
      }
      this.showErrors(errors);
    }
  }

  render() {
    return (
      <div className={this.props.modalOpened ? "Modal visible" : "Modal"}>
        <form id="add-food-form" onChange={this.handleForm} onSubmit={this.validateForm}>
          <label htmlFor="name">co tam zajadasz?</label>
          <br />
          <input type="text" id="name" placeholder="wpisz swe danie" autoComplete="off" />

          <br />
          <label htmlFor="kcal">kcal</label>
          <br />
          <input type="number" id="kcal" min="0" max="20000" placeholder="kcal" autoComplete="off" />

          <br />
          <label htmlFor="protein">białko</label>
          <br />
          <input type="number" id="protein" min="0" max="20000" placeholder="pyszne aminokwasy" autoComplete="off" />

          <br />
          <div className="Flex Flex-50">
            <div>
              <label htmlFor="carbohydrates">węglowodany</label>
              <br />
              <input type="number" id="carbohydrates" min="0" max="20000" placeholder="węgle" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="sugar">cukry</label>
              <br />
              <input type="number" id="sugar" min="0" max="20000" placeholder="cukier" autoComplete="off" />
            </div>
          </div>

          <br />

          <div className="Flex Flex-50">
            <div>
              <label htmlFor="fat">tłuszcze</label>
              <br />
              <input type="number" id="fat" min="0" max="20000" placeholder="tłuszcz" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="saturated">nasycone</label>
              <br />
              <input type="number" id="saturated" min="0" max="20000" placeholder="nasycone" autoComplete="off" />
            </div>
          </div>

          <br />
          <label htmlFor="salt">sól</label>
          <br />
          <input type="number" id="salt" min="0" max="20000" placeholder="sól" autoComplete="off" />

          <div className="Modal-Buttons-Container Flex Flex-50">
            <Button textContent="Close" clicked={this.closeModal} action="toggle-modal" />
            <Button textContent="Add" clicked={this.validateForm} action="add-nutrition" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

Modal.propTypes = {
  modalOpened: PropTypes.bool
};

export default Modal;
