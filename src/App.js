import React, { Component } from "react";
import DietContainer from "./Containers/DietContainer/DietContainer";

class App extends Component {
  state = {
    appData: {
      userData: {
        username: "Pan Filip",
        weight: 82,
        heigth: 195,
        kcal: 2000
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

  render() {
    return <DietContainer data={this.state} />;
  }
}

export default App;
