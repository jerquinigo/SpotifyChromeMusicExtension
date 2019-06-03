import React, {Component} from 'react'
import SkipSongButton from './SkipSongButton.js'
import * as songsApi from '../utils/songsUtils.js'
import GenresDropDown from './GenresDropDown.js'


class DisplayAllSongs extends Component{
constructor(){
  super()
  this.state = {
    autoplay: false,
    allSongs: [],
    currentSong: 9,
    picked: 115,
    genres: [
     { id: 115, name: 'Pop' },
     { id: 5, name: 'Rock' },
     { id: 146, name: 'Hip-Hop' },
     { id: 407, name: 'Country' },
     { id: 299, name: 'Jazz' },
     { id: 21, name: 'Classical' },
     { id: 446, name: 'Folk' },
     { id: 33, name: 'Alternative' }
   ]
  }
}

getSongsByGenre = (id) => {
  return songsApi.getSongsByGenre(id).then(res => {
    this.setState({
      allSongs: res.data.tracks
    })
  }).catch(err => console.log(err))
}

componentDidMount(){
  let id = parseInt(this.state.picked)
this.getSongsByGenre(id)
}





// getAllSongs = () => {
//   return songsApi.getAllSongs()
//   .then(res => {
//     this.setState({
//       allSongs: res.data.tracks
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }
// timeOutFunc = () => {
//   setTimeout(() => {
//     this.setState({
//       autoplay: true
//     })
//   }, 300000)
// }

displaySong = () => {
  let track = this.state.allSongs[this.state.currentSong];
  return (
    <div className="displaySong">
      <div className="audioDiv">
        {!this.state.autoplay ? (
          <audio
            autoPlay
            controls
            name="media"
            src={track.previewURL}
            type="audio/mp3"
            />
        ) : null}
    </div>
    <div className="trackName">
      <h2>{track.name}</h2>
    </div>
    </div>
  );
};


skipSong = () => {
  this.setState({
    currentSong: this.state.currentSong + 1
  });
};

prevSong = () => {
  this.setState({
    currentSong: this.state.currentSong - 1
  });
};

listGenres = () => {
   let { genres } = this.state;
   let genreList = genres.map(genre => {
     return <option key={genre.id} value={genre.id}>{genre.name}</option>;
   });
   return genreList;
 };

 changeHandler = e => {
 this.getSongsByGenre(e.target.value)
 };

 // {this.getSongsByGenre(parseInt(this.state.picked))}
  render(){
    console.log(this.state.picked)
    if(!this.state.allSongs.length) return null
    return(
      <div className="displayAllSongsPage">
        <GenresDropDown changeHandler={this.changeHandler} listGenres={this.listGenres}/>
        {this.displaySong()}
        <SkipSongButton skipSong={this.skipSong} currentSong={this.state.currentSong} prevSong={this.prevSong} />
      </div>
    )
  }
}

export default DisplayAllSongs
// {this.timeOutFunc()}
