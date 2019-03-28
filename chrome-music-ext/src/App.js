import React, { Component } from "react";
// import logo from "./earworm.jpeg";
import axios from "axios";
import "./App.css";
const secret = require("./secret.json");


class App extends Component {
  state = {
    allSongs: [],
    currentSong: 0
  };


  componentDidMount = () => {
    axios
      .get(
        `http://api.napster.com/v2.2/playlists/pp.125821370/tracks?apikey=${secret["apiKey"]}&limit=15&offset=15`
      )
      .then(res => {
        this.setState({
          allSongs: res.data.tracks
        });
      });
  };

  displaySong = () => {
    let track = this.state.allSongs[this.state.currentSong];
    return (
      <div>
        <audio
          controls
          autoPlay
          name="media"
          src={track.previewURL}
          type="audio/mp3"
        />
        <h2>{track.name}</h2>
      </div>
    );
  };

  skipSong = () => {
    this.setState({
      currentSong: this.state.currentSong + 1
    });
  };

  render() {
    if (!this.state.allSongs.length) return null;
    return (
      <div className="App">
        <h1 className="hello">Hello world</h1>
        <button onClick={this.skipSong}>Next</button>
        {this.displaySong()}
      </div>
    );
  }
}

export default App;
