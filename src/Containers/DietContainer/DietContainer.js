import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import DataDisplay from "../../Components/DataDisplay/DataDisplay";
import Chart from "../../Components/Chart/Chart";
import Button from "../../Components/Button/Button";
import Backdrop from "../../Components/Backdrop/Backdrop";
import Modal from "../../Components/Modal/Modal";

class DietContainer extends Component {
  state = {
    menuOpened: false,
    modalOpened: false,
    nutritionData: {},
    dataLoaded: true,
    nutritions: {},
    lastUpdated: null
  };

  componentDidMount() {
    // fetch("data/nutritionData.json")
    //   .then(response => response.json())
    //   .then(json =>
    //     this.setState({
    //       dataLoaded: true,
    //       nutritionData: json
    //     })
    //   );
  }


  addNutrition = this.addNutrition.bind(this);
  addNutrition(data) {
    console.log(data);
  }

  toggleModal = this.toggleModal.bind(this);
  toggleModal() {
    this.setState(prevState => ({
      modalOpened: !prevState.modalOpened
    }));
  }

  toggleMenu = this.toggleMenu.bind(this);
  toggleMenu() {
    this.setState(prevState => ({
      menuOpened: !prevState.menuOpened
    }));
    console.log("menu opened: " + !this.state.menuOpened);
  }

  handleButtonClicks = this.handleButtonClicks.bind(this);
  handleButtonClicks(e) {

    if(e.target.nodeName === 'BUTTON') {
      let action

      if (e.target.dataset.action.search('-') > 0) {
        let names = e.target.dataset.action.split('-');
        names[1] = names[1].charAt(0).toUpperCase() + names[1].slice(1);
          
        action = names.join('');
      } else {
        action = e.target.dataset.action;
      }
      
      if(typeof this[action] !== 'undefined') {
        this[action](e);
      } else {
        console.error('No function to call: %c' + action, 'background: #222; color: #ff0000')
        return;
      }
    }
  }

  render() {
    if (!this.state.dataLoaded) {
      return <p>Loading user data...</p>;
    } else {
      return (
        <>
          <Header 
            clicked={this.handleButtonClicks} 
            menuOpened={this.state.menuOpened} />
          <DataDisplay
            parentCallback = {this.callbackFunction}
            nutritionData={this.state.nutritionData} 
            userData={this.props.data.appData.userData} />
          <Chart />
          <Button
            clicked={this.handleButtonClicks}
            textContent={"Dodaj"}
            action="toggle-modal" />
          <Backdrop showBackdrop={this.state.modalOpened}>
            <Modal
              modalOpened={this.state.modalOpened}
              clicked={this.handleButtonClicks}
            />
          </Backdrop>
        </>
      );
    }
  }
}

export default DietContainer;