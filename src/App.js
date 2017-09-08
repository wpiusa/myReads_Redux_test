import React, { Component } from 'react'
import PostNav from './Nav'
import PostDetails from './PostDetails'
import './style.css'
import './helpers'

class App extends Component {
  render(){
  	return(
      <div>
        <PostNav />
        <PostDetails />
      </div>
  	)
  }  

}

export default App	