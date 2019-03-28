import React, {Component} from 'react'


class SearchFeature extends Component{
  constructor(){
    super()
    this.state = {
      searchInput:""
    }
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.name
  })
}

searchForm = () => {
  return(
    <form>
    <>
  )
}




    render(){
      return(
        <div>

        </div>
      )
    }
  }
}
