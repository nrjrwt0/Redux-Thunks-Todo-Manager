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
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
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