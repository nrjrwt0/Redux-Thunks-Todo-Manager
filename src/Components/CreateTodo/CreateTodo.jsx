import React from 'react'
import styled from 'styled-components'
import { Subtasks } from './Subtasks'
import { TagsAndProgress } from './TagsAndProgress'

const CreateTodo = () => {
  

  
  return(
    <Container>
      <div>
        <Left>
          <div>
            <input type="text" placeholder="Title"/>
            <textarea style={{resize: "none"}} cols="27" rows="4" placeholder="Description"></textarea>
          </div>
          <Subtasks />
        </Left>

        <Right>
          <div>
            <label htmlFor="date">Date: </label>
            <input id="date" type="date" placeholder="date"/>
          </div>
          <TagsAndProgress />
          <button>Create Task</button>
        </Right>
      </div>
    </Container>
  )
}

export {CreateTodo}


const Container = styled.div`
  height:90%;
  &  > div{
    height:100%;
    display:flex;
    & > div{
      flex:1;
      /* border:1px solid red; */
      text-align:center;
      padding:10px;
      height:90%;
    }
  }   
`

const Left = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  & > div:first-child{
    flex:1;
    input,textarea{
      background-color:transparent;
      border:2px solid #487e95;
      color:white;
      outline:none;
      padding:10px 16px;
      font-weight:bold;
      font-size:15px;
      border-radius:4px;

    }
    input[type=text]{
      width:68%;
      font-size:16px;
      display:inline-block;
      margin:30px auto;
    }
    input[type=date]{
      padding:6px;
    }
  }
`


const Right = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  & > button{
    background-color:#c15050;
    color:white;
    padding:14px 22px;
    cursor: pointer;
    font-size:16px;
    font-weight:650;
    border-radius:6px;
    border:none;
  }
  & > div:first-child{
    label{
      font-weight:600;
      margin:0px 8px;
    }
    input[type=date]{
      background-color:transparent;
      color:white;
      border:2px solid #487e95;
      padding:3px 4px;
      font-weight:bold;
      font-size:14px;
    }
    input[type=date]::-webkit-calendar-picker-indicator {
      cursor: pointer;
      opacity: 0.9;
      filter: invert(0.8);
    }
  }
  

`