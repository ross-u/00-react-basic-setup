import React from "react";
import "./App.css";
import ListComponent from "./ListComponent.js";

class App extends React.Component {
  state = {
    city: "Barcelona"
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Ironhackers</h1>
        <h3>React Intro.</h3>
        <h3>Welcome to {this.state.city} </h3>

        <ListComponent />
        <ListComponent />
      </div>
    );
  }
}

export default App;
