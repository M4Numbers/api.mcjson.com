import React from 'react';
import {Link} from 'react-router';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default class App extends React.Component{
    
    render(){
        return <div>
            <Navbar inverse>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">MCJson API editor</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={2} href="#/items">Items</NavItem>
                    <NavItem eventKey={4} href="#/entities">Entities</NavItem>
                    <NavItem eventKey={5} href="#/enchantments">Enchantments</NavItem>
                    <NavItem eventKey={6} href="#/effects">Status Effects</NavItem>
                    {/*<NavItem eventKey={6} href="#/crafting">Crafting</NavItem> */}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
            <div className="main">
            {this.props.children}
            </div>
            </div>
        </div>
    }
}