import React from 'react';
import PropTypes from "prop-types";
import Button from "../Button/Button";


const header = props => (
  <>
  <header className="Header">
    <img src="#" alt="Logo"/>
    <Button 
        textContent="MENU"  
        clicked={props.clicked} 
        action="toggle-menu" />
  </header>
  <div>
    <h1>witaj {props.userData.username}</h1>
  </div>
  </>
);

header.propTypes = {
  menuClicked: PropTypes.func
};

export default header;
