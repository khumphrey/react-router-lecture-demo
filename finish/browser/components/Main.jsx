import React from "react";
import AnimalsList from "./AnimalsList.jsx";
import NotFound from "./NotFound.jsx";
import About from "./About.jsx";
import AnimalProfile from "./AnimalProfile.jsx";
import { catsData, dogsData } from "../../data";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeView: "cats",
      cats: catsData,
      dogs: dogsData
    };
    // this.findAllBarkers = this.findAllBarkers.bind(this);
    // this.findAllMeowers = this.findAllMeowers.bind(this);
  }

  // componentDidMount() {
  //   const hash = location.hash.substr(1)
  //   this.setState({activeView: hash})
  // }

  // findAllMeowers () {
  //   this.setState({activeView: 'cats'})
  //   location.hash='cats'
  // }

  // findAllBarkers () {
  //   this.setState({activeView: 'dogs'})
  //   location.hash='dogs'
  // }

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

          <Router>
            <div>
              <div className="container cat-or-dog">
                <div className="row">
                  <Link className="btn-flat btn-large col s5" to="/cats">
                    I WANT A MEOWER
                  </Link>
                  <Link className="btn-flat btn-large col s5 offset-s2" to="/dogs">
                    I WANT A BARKER
                  </Link>
                  {/*<div className="btn-flat btn-large col s5" onClick={this.findAllMeowers}>
                    I WANT A MEOWER
                  </div>
                  <div className="btn-flat btn-large col s5 offset-s2" onClick={this.findAllBarkers}>
                    I WANT A BARKER
                  </div>*/}
                </div>
              </div>
              <div className="App-content container-fluid">
                <Switch>
                  <Route 
                    exact path="/" 
                    render={ () => 
                      <AnimalsList 
                        animals={[...this.state.cats, ...this.state.dogs]} 
                        view="All the adoptable animals"
                      /> } />
                  <Route 
                    path="/dogs" 
                    render={ () => 
                      <AnimalsList 
                        animals={this.state.dogs} 
                        view="Puppy Paradise"
                      /> } />
                  <Route 
                    path="/cats" 
                    render={ () => 
                      <AnimalsList 
                        animals={this.state.cats} 
                        view="Kitten Haven"
                      /> } />
                  <Route 
                    path="/profile/:id" 
                    render={ ({match}) => {
                      console.log('match', JSON.stringify(match))
                      return (<AnimalProfile
                        allAnimals={[...this.state.cats, ...this.state.dogs]}
                        id={match.params.id}
                      />) } } />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
    );
  }
}

export default Main;
