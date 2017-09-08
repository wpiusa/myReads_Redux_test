import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class PostDetails extends Component {
  state = {
     posts:[] 
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

  render(){
    console.log('posts',this.state.posts)
    const {posts} =this.state

  	return(
      <div className='center'>
       <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th width="50px">Vote</th>
              <th><center>Posts</center></th>
              
            </tr>
          </thead>
          <tbody>
             {posts.map((post)=>(
                <tr key={post.id}>
                  <td >{post.voteScore}</td>
                  <td >{post.title}
                       <p>{post.body}</p>
                       <p>By: {post.author}</p>
                       <p>{post.timestamp}</p>
                  </td>
                </tr>

              ))}
                                              
          </tbody>
       </Table>
      </div>
  	)
  }  

}

export default PostDetails