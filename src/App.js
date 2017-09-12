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
    fetch('http://localhost:3001/posts',{
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

  /**

  handlePostVote = (postId) => {
    const nextPosts = this.state.posts.map((post) => {
      if (post.id === postId) {
        return Object.assign({}, post, {
          voteScore: post.voteScore + 1,
        });
      } else {
        return nextPosts;
      }
    });
    this.setState({
      posts: nextPosts,
    });
  }
*/
  handlePostVote = (postId) => {
     

     const tmpPost=this.state.posts.map((post) => {
      
      return Object.assign({}, post, {
                voteScore: post.voteScore + 1,
              });
     
     });
     this.setState({
          posts:tmpPost
     })
  }   


  render(){
  	//console.log("posts",this.state.posts.length)
  	return(
      <div className="center">
        <PostNav />
        <PostDetails 
          posts={this.state.posts}
          onVote={this.handlePostVote}
        />
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
    //console.log("vote",this.props.onVote)
  	//console.log("posts props",this.props.posts)
    const posts = this.props.posts.sort((a, b) => (
      b.voteScore - a.voteScore
    ));

  	const postsComp=posts.map((post) =>(
      <DisplayPost 
         key={post.id}
         id={post.id}
         title={post.title}
         body={post.body}
         author={post.author}
         timestamp={post.timestamp}
         voteScore={post.voteScore}
         onVote={this.props.onVote}
      />
  	));
  	return(
      <div>
        {postsComp}
      </div>
  	)
  }	
}

class DisplayPost extends Component {
  
 handleUpVote =() =>{
  
  this.props.onVote(this.props.id)
 }

  render(){

  	return(
    <div className='boxrow'>
      <table>
       <tbody> 
        <tr>
          <td width="5%"><img src={'up.JPG'} onClick={this.handleUpVote}/></td>
          <td>{this.props.title }</td>
        </tr>

        <tr>
          <td>{this.props.voteScore}</td>
          <td>{this.props.body }</td>
        </tr>

        <tr>
          <td></td>
          <td>By: {this.props.author}{' '}{millisecondsToHuman(this.props.timestamp)} {' '}</td>
        </tr>

        <tr>
          <td><img src={'down.JPG'}/></td>
          <td><TotalComments postId={this.props.id}/></td>
        </tr>
       </tbody>
      </table>
     </div> 
      
  	)
  }	
}


class TotalComments extends Component {
   state={
   	totalComment:0
   }

   componentWillMount(){
  

     fetch('http://localhost:3001/posts/'+this.props.postId+'/comments',{
                          
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
         <p>Comments:{ ' '}{this.state.totalComment}</p>
      </div>
     
  	)
  }	
}
export default App	