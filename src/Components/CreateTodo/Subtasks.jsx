import React, { useState } from 'react'
import styled from 'styled-components';
import {v4 as uuid} from 'uuid'

const initState = {
   title : "",
   status : false
}

const Subtasks = () => {
  const [subTasksData,setSubTasksData] = useState([]);
  const [subtask,setSubtask] = useState(initState);
  const [isEmpty,setIsEmpty] = useState(false);

  const handleChange = (e) => {
    const {name,value,type,checked} = e.target;
    const val = type === "checkbox" ? checked : value;
    const payload = {
      ...subtask,
      [name] : val
    }
    setSubtask(payload);
  }

  const handleEmptyInput = () => {
    setIsEmpty(true);
    setInterval(() => {
      setIsEmpty(false);
    },2500)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(subtask.title === ""){
      handleEmptyInput();
      return;
    }
    const payload = {
      id: uuid(),
      ...subtask
    }
    setSubTasksData([payload,...subTasksData]);
    setSubtask(initState)
  }

  const handleStatusChange = (id) => {
    const updatedTasksData = subTasksData.map((subtask) => subtask.id === id ? {...subtask,status: !subtask.status} : subtask);
    setSubTasksData(updatedTasksData)
  }
  const handleDelete = (id) => {
    const updatedTasksData = subTasksData.filter((subtask) => subtask.id !== id);
    setSubTasksData(updatedTasksData)
  }
  // const handleChangeSubtask = (id) => {
  //   const updatedTasksData = subTasksData.map((subtask) => subtask.id === id ? {...subtask,status: !subtask.status} : subtask);
  //   setSubTasksData(updatedTasksData)
  // }

  return(
    <Container>
        <Box onSubmit={handleSubmit}>
          <div>
            <input onChange={handleChange} checked={subtask.status} name="status"  type="checkbox"/>
            <input onChange={handleChange} value={subtask.title}  name="title" type="text" placeholder={isEmpty ? "Please add something" : "Add your subtasks here"}/>
          </div>
          <button>Add</button>
        </Box>
        <SubtasksDiv>
          {subTasksData.map(({id,title,status}) => {
          return (
            <div key={id}>
              <h5>{title}</h5>
              <div>
                <button onClick={() => handleStatusChange(id)}>{status ?<i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i> }</button>
                <button onClick={() => handleDelete(id)}><i className="fas fa-trash"></i></button>
              </div>
            </div>
          ) 
          })}
        </SubtasksDiv>
     </Container>   
  )
}

export {Subtasks}

const Container = styled.div`
  width:84%;
  margin-top:22px;
`
const Box = styled.form`
  display:flex;
  justify-content:space-around;
  align-items:center;
    & > button{
      padding:8px 14px;
      font-size:14px;
      background-color:#314e52;
      border:none;
      cursor: pointer;
      color:white;
      margin:0px 8px;
      outline:none;
    }
    &  > div{
    width:87%;
    background-color:#bb8082;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:16px auto;
    padding:2px 10px;
    input[type=checkbox]{
      width:15px;
      height:15px;
      display:inline-block;
    }
    input[type=text]{
      padding:6px ;
      font-size:14px;
      font-weight:500;
      background-color:transparent;
      border:none;
      outline:none;
      color:white;
    }
    input[type=text]:focus{
      background-color:transparent;
      border:none;
      outline:none;
      color:white;
    }
    input[type=text].visited{
      background-color:transparent;
      border:none;
      outline:none;
      color:white;
    }
    input[type=text]::placeholder{
      color:white;
    }
  }
`
const SubtasksDiv = styled.div`
  max-height:26vh;
  overflow-y:scroll;
  & > div{
    width:100%;
    padding:7px 10px;
    font-size:16px;
    margin:10px auto;
    display:flex;
    justify-content:space-between;
    border:2px solid #bb8082;
    div{
      display:flex;
      justify-content:space-around;
      align-items:center;
      button{
        padding:0px 2px;
        background-color:transparent;
        color:teal;
        border:none;
      }
    }
  }
`