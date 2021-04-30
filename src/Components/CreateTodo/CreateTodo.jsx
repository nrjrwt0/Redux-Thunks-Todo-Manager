import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addDate, addDescription, addTitle, resetForm } from '../../Redux/CreateTodo/action'
import { addTodo } from '../../Redux/Todos/action'
import { Subtasks } from './Subtasks'
import { TagsAndProgress } from './TagsAndProgress'

const CreateTodo = () => {
  const title = useSelector(state => state.createTodo.title);
  const description = useSelector(state => state.createTodo.description);
  const date = useSelector(state => state.createTodo.date);
  const createTodo = useSelector(state => state.createTodo);

  const dispatch = useDispatch();


  const handleChange = (e) => {
    const {name,value} = e.target;

    if(name === "title"){
      dispatch(addTitle(value));
    } else if(name === "description"){
      dispatch(addDescription(value));
    } else if(name === "date"){
      dispatch(addDate(value));
    }
  }

  const handleCreateTask = () => {
    dispatch(addTodo(createTodo));
    dispatch(resetForm());
  }

  const handleResetForm = () => {
    dispatch(resetForm());
  }
  
  return(
    <Container>
      <div>
        <Left>
          <div>
            <input onChange={handleChange} value={title} type="text" name="title" placeholder="Title"/>
            <textarea onChange={handleChange} value={description} style={{resize: "none"}} cols="27" rows="4" name="description" placeholder="Description"></textarea>
          </div>
          <Subtasks />
        </Left>

        <Right>
          <div>
            <label htmlFor="date" onChange={handleChange} value={date}>Date: </label>
            <input onChange={handleChange} id="date" type="date" name="date" placeholder="date"/>
          </div>
          <TagsAndProgress />
          <span>
            <button onClick={handleCreateTask}>Create New Task</button>
            <br/>
            <span onClick={handleResetForm}>Reset</span>
          </span>
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

  & > span > span{
    cursor: pointer;
    font-size:17px;
    color: #c15050;
    text-decoration:underline;
  }

  & > span > button{
    background-color:#c15050;
    color:white;
    padding:14px 22px;
    cursor: pointer;
    font-size:16px;
    font-weight:650;
    border-radius:6px;
    border:none;
    margin-top:24px;
    margin-bottom:16px;
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
      outline:none;
    }
    input[type=date]::-webkit-calendar-picker-indicator {
      cursor: pointer;
      opacity: 0.9;
      filter: invert(0.8);
    }
  }
  

`