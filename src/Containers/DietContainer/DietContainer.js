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

  handleMenuClicked = this.handleMenuClicked.bind(this);
  handleMenuClicked() {
    this.setState(prevState => ({
      menuOpened: !prevState.menuOpened
    }));

    console.log("menu opened: " + !this.state.menuOpened);
  }

  handleAddClicked = this.handleAddClicked.bind(this);
  handleAddClicked() {
    this.setState(prevState => ({
      modalOpened: !prevState.modalOpened
    }));

    console.log("modal opened: " + !this.state.modalOpened);
  }

  handleAddNutrition = this.handleAddNutrition.bind(this);
  handleAddNutrition() {
    this.setState({
      lastUpdated: new Date()
    });
    console.log(new Date());
  }

  render() {
    if (!this.state.dataLoaded) {
      return <p>Loading user data...</p>;
    } else {
      return (
        <>
          <Header menuClicked={this.handleMenuClicked} menuOpened={this.state.menuOpened} />
          <DataDisplay nutritionData={this.state.nutritionData} userData={this.props.data.appData.userData} />
          <Chart />
          <Button clicked={this.handleAddClicked} textContent={"Dodaj"} buttonType="open-modal" />
          <Backdrop showBackdrop={this.state.modalOpened}>
            <Modal
              modalOpened={this.state.modalOpened}
              closeClicked={this.handleAddClicked}
              addClicked={this.handleAddNutrition}
            />
          </Backdrop>
        </>
      );
    }
  }
}

export default DietContainer;
