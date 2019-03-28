import React, {Component} from 'react'
import SkipSongButton from './SkipSongButton.js'
import * as songsApi from '../utils/songsUtils.js'


class DisplayAllSongs extends Component{
constructor(){
  super()
  this.state = {
    allSongs: [],
    currentSong: 0
  }
}

componentDidMount(){
this.getAllSongs()
}

getAllSongs = () => {
  return songsApi.getAllSongs()
  .then(res => {
    this.setState({
      allSongs: res.data.tracks
    })
  })
  .catch(err => {
    console.log(err)
  })
}

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



  render(){
    if(!this.state.allSongs.length) return null
    return(
      <div className="displayAllSongsPage">
      <SkipSongButton skipSong={this.skipSong} currentSong={this.state.currentSong} />
    {this.displaySong()}
      </div>
    )
  }
}

export default DisplayAllSongs
