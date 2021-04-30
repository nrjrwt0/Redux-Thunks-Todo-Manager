import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  return(
    <div>
      <Container>
        <h1>Login</h1>
          <form>
            <input required type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value(e))}}/>
            <input required type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value(e))}}/>
            <input type="submit" value="Login"/>
          </form>
         <span>Don't have an account <Link to="/signup">Sign up</Link> here</span>
      </Container>
    </div>
  )

}

export {Login}

const Container = styled.div`
  h1{
    /* text-align:center; */
  }
`