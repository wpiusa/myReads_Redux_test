import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

class Posts extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    categories:[] 
   
  }

  
  componentDidMount(){ 
    fetch('http://localhost:3001/categories',{
       headers: {
         'Authorization': 'Eun', 
         'Content-Type': 'application/x-www-form-urlencoded'
       }, 
    })
      .then((response) => response.json())

      .then((responseJson) => {
        
        this.setState({
          categories:responseJson.categories
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }


  /**

  updateBook = (attrs) =>{

    this.setState({
      books: this.state.books.map((book) => {
        if (book.id === attrs.id) {
          return Object.assign({}, book);
        } else {
          return book;
        }
      }),
    });
    
  }
  */
  render() {
    const {categories} =this.state
    return (
      /**

      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>

        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>

      </div>  
     */
     
     <div>
       <p>Categories</p>
       <ListGroup>
         {categories.map((categorie)=>(
           <ListGroupItem key={categorie.name} href="#">
             {categorie.name}
           </ListGroupItem>
         ))}
       </ListGroup>
     </div>
    )
  }
}


export default Posts
