import React, { Component } from 'react'
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


class App extends Component {
  render(){
  	return(
      <div>
        <Jumbotron>
            <h2>Posts Voting</h2>
            <Panel>
               <Nav bsStyle="pills" activeKey={1} >
				    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
				    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
				    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
			   </Nav>
            </Panel>

            <Grid>
			    <Row className="show-grid">
			      <Col sm={6} md={1}>a</Col>
			      <Col sm={6} md={11}>b</Col>
			    </Row>
	   
  			</Grid>

        </Jumbotron>
      </div>
  	)
  }  

}

export default App	