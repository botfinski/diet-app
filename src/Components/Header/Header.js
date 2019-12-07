import React from 'react';
import PropTypes from "prop-types";

const header = props => (
  <header className="Header">
    <img src="#" alt="Logo"/>
    <button onClick={props.menuClicked}>MENU</button>
  </header>
);

header.propTypes = {
  menuClicked: PropTypes.func
};

export default header;
