import React from 'react'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  return(
  <div>
    <h1>
      Login Form here
    </h1>
  </div>
  )
}

const Login = () => {
  const navigate = useNavigate();
  const session = false;

  return (
    <div>
      {(!session) ? <LoginForm /> : navigate('/')}
    </div>
  )
}

export default Login