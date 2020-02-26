import React, { Component } from "react";
// import DietContainer from "./Containers/DietContainer/DietContainer";
import Button from "./Components/Button/Button";
import Backdrop from "./Components/Backdrop/Backdrop";
import Modal from "./Components/Modal/Modal";

class App extends Component {
  state = {
    foodList: null,
    lastUpdate: null,
    todayTotal: {
      kcal: 0,
      protein: 0,
      carbohydrates: 0,
      sugar: 0,
      fat: 0,
      saturated: 0,
      salt: 0
    },
    modalOpened: false
  };

  componentDidMount() {
    this.dupa();
    let lastUpdate = localStorage.getItem("lastUpdate");

    if (!lastUpdate) {
      lastUpdate = Date.now();
      localStorage.setItem("lastUpdate", lastUpdate);
    }

    this.setState({ lastUpdate });
  }

  addNutrition = this.addNutrition.bind(this);
  addNutrition(data) {
    console.log("%c addNutrition()", "background: #222; color: #bada55");
    // console.log(data);

    // console.log(data);

    this.toggleModal();

    // let newFood = { ...data, date: Date.now() },
    //   // newfoodList = { ...this.state.foodList },
    //   newTotal = { ...this.state.todayTotal };
    // // prop = Date.now().toString();
    // // newfoodList[prop] = newFood;

    // // console.log(newfoodList);
    // // console.log(newTotal);

    // function sumObjectsByKey(...objs) {
    //   console.log(...objs);
    //   return objs.reduce((a, b) => {
    //     for (let k in b) {
    //       if (typeof b[k] === "number") {
    //         if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    //       }
    //     }
    //     return a;
    //   }, {});
    // }

    // // console.log(sumObjectsByKey(newFood, newTotal));
    // sumObjectsByKey(newFood, newTotal);

    // this.setState({
    //   // foodList: newfoodList
    //   // total: newTotal
    // });
  }

  toggleModal = this.toggleModal.bind(this);
  toggleModal(e) {
    let form = document.querySelector("#add-food-form");

    form.reset();

    this.setState(prevState => ({
      modalOpened: !prevState.modalOpened
    }));
  }

  handleButtonClicks = this.handleButtonClicks.bind(this);
  handleButtonClicks(e) {
    if (e.target.nodeName === "BUTTON") {
      let action;

      if (e.target.dataset.action.search("-") > 0) {
        let names = e.target.dataset.action.split("-");
        names[1] = names[1].charAt(0).toUpperCase() + names[1].slice(1);

        action = names.join("");
      } else {
        action = e.target.dataset.action;
      }

      if (typeof this[action] !== "undefined") {
        this[action](e);
      } else {
        console.error("No function to call: %c" + action, "background: #222; color: #ff0000");
        return;
      }
    }
  }

  dupa = this.dupa.bind(this);
  dupa(e) {
    let massages = [
      {
        name: "111",
        date: "01-01-2020"
      },
      {
        name: "222",
        date: "01-01-2020"
      },
      {
        name: "333",
        date: "01-01-2020"
      },
      {
        name: "444",
        date: "01-01-2020"
      },
      {
        name: "555",
        date: "01-01-2020"
      },
      {
        name: "666",
        date: "01-01-2020"
      },
      {
        name: "7777",
        date: "01-01-2020"
      },
      {
        name: "888",
        date: "01-01-2020"
      },
      {
        name: "999",
        date: "01-01-2020"
      },
      {
        name: "10000",
        date: "01-01-2020"
      },
      {
        name: "aaa11",
        date: "02-01-2020"
      },
      {
        name: "aaa222",
        date: "02-01-2020"
      },
      {
        name: "aaa333",
        date: "02-01-2020"
      },
      {
        name: "aaa444",
        date: "02-01-2020"
      },
      {
        name: "aaa5555",
        date: "02-01-2020"
      },
      {
        name: "aaa666",
        date: "02-01-2020"
      },
      {
        name: "aaa777",
        date: "03-01-2020"
      },
      {
        name: "aaacsdfsd",
        date: "03-01-2020"
      },
      {
        name: "aaasdfsdf",
        date: "03-01-2020"
      },
      {
        name: "aaasdfsdf",
        date: "03-01-2020"
      },
      {
        name: "aaasdfsf",
        date: "03-01-2020"
      }
    ];

    let dates = new Set(massages.map(massage => massage.date));

    const createList = () => {
      console.log(dates);
      console.log(massages);

      let splited = [];

      dates.forEach(date => {
        let temp = massages.filter(massage => massage.date === date);

        splited.push(temp);
      });

      console.log(splited);
    };

    createList();
  }

  render() {
    return (
      <>
        <p>{this.state.lastUpdate}</p>
        <Button className="add-food-button" clicked={this.handleButtonClicks} textContent="+" action="toggle-modal" />
        <Backdrop showBackdrop={this.state.modalOpened}>
          <Modal
            modalOpened={this.state.modalOpened}
            clicked={this.handleButtonClicks}
            addNutrition={this.addNutrition}
          />
        </Backdrop>
      </>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     appData: {
//       userData: {
//         username: "Pan Filip",
//         weight: 82,
//         heigth: 195,
//         nutritions: {
//           kcal: 2000,
//           protein: 0,
//           carbohydrates: 0,
//           sugar: 0,
//           fat: 0,
//           saturated: 0,
//           salt: 0
//         }
//       },
//       modes: {
//         none: [1.2, 1.5],
//         mass: [2.2, 2.5],
//         reduction: [1.8, 2.4],
//         reduction_workout: [2.3, 3.1]
//       },
//       selected_mode: "none"
//     }
//   };

//   calculateProteins = this.calculateProteins.bind(this);
//   calculateProteins(e) {
//     let s = this.state.appData;

//     let baseValue = s.userData.weight,
//       minValue = s.userData.weight * s.modes[s.selected_mode][0],
//       maxValue = s.userData.weight * s.modes[s.selected_mode][1];

//     console.log(Math.floor(baseValue * 100) / 100);
//     console.log(Math.floor(minValue * 100) / 100);
//     console.log(Math.floor(maxValue * 100) / 100);
//   }

//   componentDidMount() {
//     console.log(this.state.appData.userData.nutritions);

//     this.calculateProteins();
//   }

//   render() {
//     return <DietContainer data={this.state.appData} />;
//   }
// }

// export default App;
