import React, { Component } from "react";
import "./App.css";
// import RoboIndex from './componets/RoboIndex';
import "tachyons";
// import { robots } from "./componets/RoboData";

import RoboIndex from "./componets/RoboIndex";
import SearchBox from "./componets/SearchBox";
import Scoll from "./componets/Scoll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    // console.log('check');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0){
      return <h1>Loding</h1>
    }
    else {

    
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <Scoll>
        <RoboIndex robots={filterRobots} />
        </Scoll>
      </div>
    );
    }
  }
}

export default App;
