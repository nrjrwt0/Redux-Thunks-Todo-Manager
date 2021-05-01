import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Login } from "../Components/Auth/Login"
import { SignUp } from "../Components/Auth/SignUp"

const AuthPage = () => {


  return( 
    <Container>
        <h1>Todo Manager</h1>
        <Wrapper>
          
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Redirect to="/"/>
        </Switch>

        </Wrapper>
      </Container>
  )
}

export {AuthPage}


const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  & > h1{
    text-align:center;
    margin:40px 0px 50px;
    color:teal;
  }

`

const Wrapper = styled.div`
  width:100%;
  height:70%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  & > div{
    flex:1;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:90%;
    &  > div{
      width:74%;
      padding:10px 24px;
      min-height:90%;
      h1{
      text-align:center;
      margin:0px 0px 30px;
      }
      form{ 
        input{
        display:block;
        margin:16px auto;
        width:100%;
        max-width:360px;
        padding:8px 10px;
        background-color:transparent;
        border:2px solid #487e95;
        outline:none;
        font-size:16px;
        color:white;
        }
        input[type=submit]{
          cursor: pointer;
          background-color:#487e95;
        }
      }
      span{
        text-align:center;
        margin-top:30px;
        display:block;
        a{
          color: #487e95;
        }
      }
    }
  }
`