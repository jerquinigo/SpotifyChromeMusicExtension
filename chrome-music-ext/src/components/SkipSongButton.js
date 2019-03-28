import React from 'react'


 const SkipSongButton = (props) => {
   console.log(props, "the props")

  return(
    <div className="buttonDiv">
      <button onClick={props.prevSong} className="previousButton"><a>Previous</a></button>
      <button onClick={props.skipSong} className="nextButton"><a>Next</a></button>
    </div>
  )
}

export default SkipSongButton
