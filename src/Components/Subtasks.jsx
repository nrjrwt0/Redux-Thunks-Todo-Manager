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
  const [error,setError] = useState(false);

  const handleChange = (e) => {
    const {name,value,type,checked} = e.target;
    const val = type === "checkbox" ? checked : value;
    const payload = {
      ...subtask,
      [name] : val
    }
    setSubtask(payload);
  }
  
  const handleSubmit = () => {
    if(subtask.title === ""){
      return;
    }
    const payload = {
      id: uuid(),
      ...subtask
    }
    setSubTasksData([...subTasksData,payload]);
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
    <div>
      {subTasksData.map(({id,title,status}) => {
       return  <div key={id}>
          <button onClick={() => handleStatusChange(id)}>{status ?<i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i> }</button>
          <h5>{title}</h5>
          <button onClick={() => handleDelete(id)}><i className="fas fa-trash"></i></button>
        </div>
      })}
        <Box>
          <input onChange={handleChange} value={subtask.status}  type="checkbox"/>
          <input onChange={handleChange} value={subtask.title}  name="title" type="text"/>
          <i className="fas fa-trash"></i>
        </Box>
      <button onClick={handleSubmit}>ADD</button>
    </div>
  )
}

export {Subtasks}

const Box = styled.div`
  /* background-color:white; */
`