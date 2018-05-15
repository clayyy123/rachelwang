import React, {Component} from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navibar extends Component{

  state={
    isOpen: false
  }

  componentDidMount(){
    console.log(this.props)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div className="Navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand id="navbrand" href="/">Rachel Wang</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav" href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">Classes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navibar