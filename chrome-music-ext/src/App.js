import React, { Component } from "react";
// import logo from "./earworm.jpeg";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    allSongs: [],
    currentSong: 0
  };
  // componentDidMount = () => {
  //   setInterval(() => {
  //     this.setState({
  //       count: this.state.count + 1
  //     });
  //   }, 500);
  // };
  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  componentDidMount = () => {
    axios
      .get(
        "http://api.napster.com/v2.2/playlists/pp.125821370/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=15&offset=15"
      )
      .then(res => {
        this.setState({
          allSongs: res.data.tracks
        });
      });
  };

  // displaySongs = () => {
  //   return this.state.allSongs.map(track => {
  //     return (
  //       <div>
  //         <video controls name="media">
  //           <source src={track.previewURL} type="audio/mpeg" />
  //         </video>
  //       </div>
  //     );
  //   });
  // };

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
