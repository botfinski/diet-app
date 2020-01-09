import React, { Component } from "react";
import Diet from "../../Components/Diet/Diet";

class DietContainer extends Component {
  state = {
    menuOpened: false,
    modalOpened: false,
    // nutritionData: {},
    nutritionsNames: ["kcal", "protein", "carbohydrates", "sugar", "fat", "saturated", "salt"],
    dataLoaded: true,
    foodList: {},
    lastUpdated: null,
    total: {
      kcal: 10,
      protein: 0,
      carbohydrates: 0,
      sugar: 0,
      fat: 0,
      saturated: 0,
      salt: 0
    }
  };

  componentDidMount() {
    // console.log(newTotal);
    // fetch("data/nutritionData.json")
    //   .then(response => response.json())
    //   .then(json =>
    //     this.setState({
    //       dataLoaded: true,
    //       nutritionData: json
    //     })
    //   );
    // let storedFoodData = localStorage.getItem('food');
    // let newfoodList = {...this.state.foodList, ...JSON.parse(storedFoodData)};
    // this.setState({foodList: newfoodList});
    // let a = {
    //   name: "aa",
    //   kcal: 111,
    //   protein: 111,
    //   carbohydrates: 111,
    //   sugar: 111,
    //   fat: 111,
    //   saturated: 111,
    //   salt: 111,
    //   date: 1576940375062
    // };
    // let b = {
    //   name: "bb",
    //   kcal: 222,
    //   protein: 222,
    //   carbohydrates: 222,
    //   sugar: 222,
    //   fat: 222,
    //   saturated: 222,
    //   salt: 222,
    //   date: 1576940375062
    // };
    // function sumObjectsByKey(...objs) {
    //   return objs.reduce((a, b) => {
    //     for (let k in b) {
    //       if (typeof b[k] === "number") {
    //         if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    //       }
    //     }
    //     return a;
    //   }, {});
    // }
    // console.log(sumObjectsByKey(a, b));
  }

  addNutrition = this.addNutrition.bind(this);
  addNutrition(data) {
    this.toggleModal();

    let newFood = { ...data, date: Date.now() },
      newfoodList = { ...this.state.foodList },
      newTotal = { ...this.state.total },
      prop = Date.now().toString();
      newfoodList[prop] = newFood;

    console.log(newfoodList);
    console.log(newTotal);



    // function isEmpty(obj) {
    //   for (var key in obj) {
    //     if (obj.hasOwnProperty(key)) return false;
    //   }
    //   return true;
    // }

    function sumObjectsByKey(...objs) {
      return objs.reduce((a, b) => {
        for (let k in b) {
          if (typeof b[k] === "number") {
            if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
          }
        }
        return a;
      }, {});
    }

    console.log(sumObjectsByKey(newfoodList, newTotal));
    // console.log(sumObjectsByKey);
    // console.log(this.state.total);
    // console.log(this.state.foodList);

    // console.log(newTotal);

    this.setState({
      foodList: newfoodList,
      total: newTotal
    });
  }

  toggleModal = this.toggleModal.bind(this);
  toggleModal(e) {
    let form = document.querySelector("#add-food-form");

    form.reset();

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

  render() {
    if (!this.state.dataLoaded) {
      return <p>Loading data...</p>;
    } else {
      return (
        <Diet
          handleButtonClicks={this.handleButtonClicks}
          menuOpened={this.state.menuOpened}
          // nutritionData={this.state.nutritionData}
          userData={this.props.data.userData}
          nutritionsNames={this.state.nutritionsNames}
          modalOpened={this.state.modalOpened}
          addNutrition={this.addNutrition}
          foodList={this.state.foodList}
          total={this.state.total}
        />
      );
    }
  }
}

export default DietContainer;
