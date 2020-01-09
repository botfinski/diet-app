import React, { Component } from "react";
import DietContainer from "./Containers/DietContainer/DietContainer";

class App extends Component {
  state = {
    appData: {
      userData: {
        username: "Pan Filip",
        weight: 82,
        heigth: 195,
        nutritions: {
          kcal: 2000,
          protein: 0,
          carbohydrates: 0,
          sugar: 0,
          fat: 0,
          saturated: 0,
          salt: 0
        }
      },
      modes: {
        none: [1.2, 1.5],
        mass: [2.2, 2.5],
        reduction: [1.8, 2.4],
        reduction_workout: [2.3, 3.1]
      },
      selected_mode: "none"
    }
  };


  
  calculateProteins = this.calculateProteins.bind(this);
  calculateProteins(e) {
    let s = this.state.appData;


    let baseValue = s.userData.weight,
      minValue = s.userData.weight * s.modes[s.selected_mode][0],
      maxValue = s.userData.weight * s.modes[s.selected_mode][1]

    console.log(Math.floor(baseValue * 100) / 100)
    console.log(Math.floor(minValue * 100) / 100)
    console.log(Math.floor(maxValue * 100) / 100)
  }

  componentDidMount() {
    console.log(this.state.appData.userData.nutritions);

    this.calculateProteins();
  }

  render() {
    return <DietContainer 
      data={this.state.appData}
    />;
  }
}

export default App;
