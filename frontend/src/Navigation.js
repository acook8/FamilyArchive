import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
          project: 'Project 1'
        };
      }
    
    render() {
        // let chooseProject = (project) => this.setState({project:})
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand>Family Archive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/collections" className="nav-link">Collections</Link>
                        <Link to="/people" className="nav-link">People</Link>
                    </Nav>
                    <NavDropdown title={this.state.project} id="projects">
                        <NavDropdown.Item onClick= {event => this.setState({project: 'Project 1'})}>Project1</NavDropdown.Item>
                        <NavDropdown.Item onClick= {event => this.setState({project: 'Project 2'})}>Project2</NavDropdown.Item>
                        {/* TODO: write current project to session storage */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Create Project</NavDropdown.Item>
                    </NavDropdown>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation