import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginCall, loginFailure, loginRequest, loginSuccess } from '../../Redux/Auth/action';
import { loadData } from '../../Utils/localStorage';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [isUserNotExist,setIsUserNotExist] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = loadData('userData');
    const currentUser = userData?.filter(
      (data) => data.email === email && data.password === password
    );

    if (!currentUser || currentUser.length === 0) {
      return setIsUserNotExist(true)
    } else {
      dispatch(loginSuccess(currentUser[0]));
      setEmail("")
      setPassword("")
    }
  }

  useEffect(() => {
    const existTimer = setTimeout(() => {
      setIsUserNotExist(false)
    },2500)

    return(() => {
      clearTimeout(existTimer)
    })
  },[isUserNotExist])


  return(
    <div>
      <div>
        <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input required type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input required type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input type="submit" value="Login"/>
          </form>
          {isUserNotExist ? <span style={{color:"red"}}>Sorry! Wrong Credentials</span> : null}
         <span>Don't have an account <Link to="/signup">Sign up</Link> here</span>
      </div>
    </div>
  )

}

export {Login}
