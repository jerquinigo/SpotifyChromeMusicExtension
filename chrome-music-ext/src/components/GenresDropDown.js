import React, {Component} from 'react'
import * as songsApi from '../utils/songsUtils.js'
// getAllGenres is the api call
class GenresDropDown extends Component{
constructor(){
  super()
  this.state ={
    genres: [],
    picked: ''
  }
}
// componentDidMount(){
// // this.displayGenres()
// }

// displayGenres = () => {
//   return songsApi.getAllGenres()
//   .then(res => {
//     debugger
//   })
// }



  render(){
    return(
      <div className="genresDropDown">
        <select
            id="dropdown"
            name="picked"
            className="genre-dropdown"
            onChange={this.props.changeHandler}
          >
            {this.props.listGenres()}
        </select>
      </div>
    )
  }
}

export default GenresDropDown
