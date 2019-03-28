import React, { Component } from "react";
// import logo from "./earworm.jpeg";

import DisplayAllSongs from './components/DisplayAllSongs.js'
import "./App.css";



class App extends Component {
  state = {
    currentSong: 0
  };

  skipSong = () => {
    this.setState({
      currentSong: this.state.currentSong + 1
    });
  };

  render() {
    return (
      <div className="App">

        <DisplayAllSongs />
      </div>
    );
  }
}

export default App;
