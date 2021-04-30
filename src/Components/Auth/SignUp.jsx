import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return(
    <div>
      <div>
      <h1>Sign Up</h1>
        <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Password"/>
          <input type="text" placeholder="Confirm Password"/>
          <input type="submit" value="Signup"/>
        </form>
        <span>Already have an account <Link to="/login">Login</Link> here</span>
      </div>
    </div>
  )

}

export {SignUp}