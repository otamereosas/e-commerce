import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Nav,
  NavLinks
} from './NavbarStyles'
import { signInWithGoogle, signOutFromGoogle } from '../firebase/utils'

const Navbar = (props) => {
  const { userIsLogedIn } = props;


  return (
    <Nav>
      <Link to="/"><h1>NUEL-STORE</h1></Link>
      <NavLinks>
        {userIsLogedIn? <p></p>:<Link to="/register"><p>Register</p></Link>}
        {userIsLogedIn? <Link to="/login"><p onClick={signOutFromGoogle} >Logout</p></Link>:<p onClick={signInWithGoogle}>Login</p>}
      </NavLinks>
    </Nav>
  )
}

export default Navbar;
