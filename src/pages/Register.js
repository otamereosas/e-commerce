import React from 'react'
import { Link } from 'react-router-dom';
import { AuthWrapper } from '../components/Signin/SigninStyles';

const Register = ()=>{
  return(
    <AuthWrapper>
      <h1>
        SIGN UP
      </h1>
      <p>Already have an account? <Link to="/login"><span>&nbsp;Login here</span></Link> </p>
    </AuthWrapper>
  )
}

export default Register;