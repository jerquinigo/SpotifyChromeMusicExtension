import React, { Component } from "react";
// import logo from "./earworm.jpeg";

import DisplayAllSongs from './components/DisplayAllSongs.js'
import "./App.css";



class App extends Component {
  state = {
    currentSong: 4
  };

  listGenres = () => {
     let { genres } = this.state;
     let genreList = genres.map(genre => {
       return <option key={genre.id}>{genre.genre_name}</option>;
     });
     return genreList;
   };

   changeHandler = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
   };

  // skipSong = () => {
  //   this.setState({
  //     currentSong: this.state.currentSong + 1
  //   });
  // };

  render() {
    return (
      <div className="App">
        <img src={require("./musicnote.png")} alt="logo" id="logo"/>

          <DisplayAllSongs />
      </div>
    );
  }
}

export default App;
