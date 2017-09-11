import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { millisecondsToHuman } from './helpers'

class PostDetails extends Component {
  state = {
     posts:[],
     comments:[]
  }

  componentDidMount(){ 
    fetch('http://localhost:5001/posts',{
       headers: {
         'Authorization': 'Eun', 
         'Content-Type': 'application/x-www-form-urlencoded'
       }, 
    })
      .then((response) => response.json())

      .then((responseJson) => {
        
        this.setState({
          posts:responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render(){

  	return(
     
  	)
  }  

}



/*

class totalPostComment extends React.Component {
  
  render(){
    return(
       2
    )
  }
}  
*/
export default PostDetails