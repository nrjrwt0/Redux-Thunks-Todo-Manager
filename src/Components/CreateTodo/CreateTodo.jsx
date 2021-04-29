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
        <div>
          <div>
            <label htmlFor="date">Date: </label>
            <input id="date" type="date" placeholder="date"/>
          </div>
          <TagsAndProgress />
          <button>Create Task</button>
        </div>
      </div>
    </Container>
  )
}

export {CreateTodo}


const Container = styled.div`
  &  > div{
    display:flex;
    & > div{
      flex:1;
      border:1px solid red;
      text-align:center;
      padding:10px;
    }
  }   
`

const Left = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  & > div:first-child{
    input,textarea{
      background-color:transparent;
      border:2px solid #487e95;
      color:white;
      outline:none;
      padding:10px 16px;
      font-weight:bold;
      font-size:15px;
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