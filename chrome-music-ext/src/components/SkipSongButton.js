import React from 'react'


 const SkipSongButton = (props) => {
   console.log(props, "the props")

  return(
    <div>
      <button onClick={props.skipSong}>Next</button>
    </div>
  )
}

export default SkipSongButton
