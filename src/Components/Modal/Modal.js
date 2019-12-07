import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import Button from "../Button/Button";

const modal = props => (
  <div className={props.modalOpened ? "Modal visible" : "Modal"}>
    <form>
      <label htmlFor="name">co tam zajadasz?</label>
      <br />
      <textarea id="name" placeholder="wpisz swe danie"></textarea>

      <br />
      <label htmlFor="kcal">kcal</label>
      <br />
      <input type="number" id="kcal" min="0" max="20000" placeholder="kcal" />

      <br />
      <label htmlFor="protein">białko</label>
      <br />
      <input type="number" id="protein" min="0" max="20000" placeholder="pyszne aminokwasy" />

      <br />
      <div className="Flex Flex-50">
        <div>
          <label htmlFor="carbohydrates">węglowodany</label>
          <br />
          <input type="number" id="carbohydrates" min="0" max="20000" placeholder="węgle" />
        </div>
        <div>
          <label htmlFor="sugar">cukry</label>
          <br />
          <input type="number" id="sugar" min="0" max="20000" placeholder="cukier" />
        </div>
      </div>

      <br />

      <div className="Flex Flex-50">
        <div>
          <label htmlFor="fat">tłuszcze</label>
          <br />
          <input type="number" id="fat" min="0" max="20000" placeholder="tłuszcz" />
        </div>
        <div>
          <label htmlFor="saturated">nasycone</label>
          <br />
          <input type="number" id="saturated" min="0" max="20000" placeholder="nasycone" />
        </div>
      </div>

      <br />
      <label htmlFor="salt">sól</label>
      <br />
      <input type="number" id="salt" min="0" max="20000" placeholder="sól" />
    </form>

    <div className="Modal-Buttons-Container Flex Flex-50">
      <Button textContent="Close" clicked={props.closeClicked} buttonType="close-modal" />
      <Button textContent="Add" clicked={props.addClicked} buttonType="add-nutrition" />
    </div>
  </div>
);

modal.propTypes = {
  modalOpened: PropTypes.bool
};

export default modal;
