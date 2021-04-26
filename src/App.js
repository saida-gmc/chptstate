import "./App.css";
import React, { Component } from "react";
import Profile from "./Component/Profile";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Check: false,
    };
  }
  checkVisibile = () => {
    this.setState({ Check: !this.state.Check });
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>

        <button onClick={this.checkVisibile}>
          {this.state.Check ? "Hide profile" : "Show profile"}
        </button>
        {this.state.Check && <Profile />}
      </div>
    );
  }
}

export default App;
