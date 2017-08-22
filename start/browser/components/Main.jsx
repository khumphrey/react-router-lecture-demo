import React from "react";
import AnimalsList from "./AnimalsList.jsx";
import NotFound from "./NotFound.jsx";
import About from "./About.jsx";
import AnimalProfile from "./AnimalProfile.jsx";
import { catsData, dogsData } from "../../data";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "cats",
      cats: catsData,
      dogs: dogsData
    };
  }

  render() {
    const animalsToDisplay = 
      this.state.activeView === "all" 
        ? [...this.state.cats, ...this.state.dogs]
        : this.state[this.state.activeView];
    return (
        <div className="App">
          <div className="App-header">
            <img src="/logo.png" className="App-logo" alt="logo" />
            <h3>adorable, adoptable pets</h3>
          </div>

          <div className="container cat-or-dog">
            <div className="row">
              <div className="btn-flat btn-large col s5">
                I WANT A MEOWER
              </div>
              <div className="btn-flat btn-large col s5 offset-s2">
                I WANT A BARKER
              </div>
            </div>
          </div>

          <div className="App-content container-fluid">
             <AnimalsList animals={animalsToDisplay} view={this.state.activeView}/>
          </div>
        </div>
    );
  }
}

export default Main;
