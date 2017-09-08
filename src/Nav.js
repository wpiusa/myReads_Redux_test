import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';



class PostNav extends Component {
  render(){
  	return(
      <div className='center'>
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

export default PostNav