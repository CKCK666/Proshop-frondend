import React from "react";
import { Container ,Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import { logout } from "../actions/userAction";
import { useNavigate ,} from "react-router-dom";
import { USER_DETAILS_RESET } from "../constants/userConstants";

const Header = () => {
 const dispatch=useDispatch()
 const navigate=useNavigate()
const userLogin=useSelector(state=>state.userLogin)
const{ userInfo}=userLogin

const logoutHandler=()=>{
  dispatch(logout())
  dispatch({type:USER_DETAILS_RESET})
    navigate("/login")
 

 
}
  return (
  <header>
    
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
  <LinkContainer to="/">
  <Navbar.Brand >ProShop</Navbar.Brand>
  </LinkContainer>
<SearchBox/>

 
  
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <LinkContainer to="/cart">
      <Nav.Link><i className="fas fa-cart-shopping"></i>
        Cart</Nav.Link>
  </LinkContainer>
  {userInfo ?(
    <NavDropdown title={userInfo.name} id="username">
     <LinkContainer to="/profile">
       <NavDropdown.Item>Profile</NavDropdown.Item>
     </LinkContainer>
     <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
    </NavDropdown>
  ):(
    <LinkContainer to="/login">
    <Nav.Link><i className="fas fa-user"></i>sign in</Nav.Link>
</LinkContainer>
  )}
  {userInfo && userInfo.isAdmin && (
     <NavDropdown title="Admin" id="adminmenu">
       <LinkContainer to="/admin/userlist">
     <NavDropdown.Item >User</NavDropdown.Item>
     </LinkContainer>
    
     <LinkContainer to="/admin/productlist">
     <NavDropdown.Item >Products</NavDropdown.Item>
     </LinkContainer>
     <LinkContainer to="/admin/orderlist">
     <NavDropdown.Item >Orders</NavDropdown.Item>
     </LinkContainer>
    </NavDropdown>
  )}
       
       
        
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  
  </header>
  )
}

export default Header;
