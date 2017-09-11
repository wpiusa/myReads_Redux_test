import React, { Component } from 'react'
import './style.css'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';

import { millisecondsToHuman } from './helpers'


class App extends Component {
  
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
  	//console.log("posts",this.state.posts.length)
  	return(
      <div className="center">
        <PostNav />
        <PostDetails posts={this.state.posts}/>
      </div>
  	)
  }  

}


class PostNav extends Component {
  render(){
  	return(
      <div>
        <h3><center>Posts Voting</center></h3>
         <Panel>
           <Nav bsStyle="pills" activeKey={1} >
			 <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
			 <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
			 <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
		   </Nav>
         </Panel>
   
      </div>
  	)
  }	
}


class PostDetails extends Component {
  render(){
  	console.log("posts props",this.props.posts)
  	const posts = this.props.posts.map((post) =>(
      <DisplayPost 
         key={post.id}
         id={post.id}
         title={post.title}
         body={post.body}
         author={post.author}
         timestamp={post.timestamp}
      />
  	));
  	return(
      <div>
        {posts}
      </div>
  	)
  }	
}

class DisplayPost extends Component {
  

  render(){
  	return(
      <div className='boxrow'>
        <div>
          {this.props.title } 
        </div>
        
        <div>
          {this.props.body}
        </div>
        
        <div>
           <p>By: {this.props.author}{' '}{millisecondsToHuman(this.props.timestamp)} {' '}  </p>
        </div>

        <div>
           <TotalComments postId={this.props.id}/>
        </div>
      </div>
  	)
  }	
}


class TotalComments extends Component {
   state={
   	totalComment:0
   }

    
    countTotalComments = (postId) => {
       fetch('http://localhost:5001/posts/'+postId+'/comments',{
                          
       headers: {
         'Authorization': 'Eun', 
         'Content-Type': 'application/x-www-form-urlencoded'
       }, 
    })
      .then((response) => response.json())
       
      .then((responseJson) => {
         this.setState({
          totalComment:responseJson.length
        })
       })
      .catch((error) => {
        console.error(error);
      });
    }
  render(){

  	return(
      <div>
         {this.countTotalComments(this.props.postId)} Comments:{' '}{this.state.totalComment}
      </div>
     
  	)
  }	
}
export default App	