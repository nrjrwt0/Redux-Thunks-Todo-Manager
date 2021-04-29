import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodo, getTodoFailure, getTodoRequest, getTodoSuccess } from '../../Redux/Todos/action';
import { TaskContainer } from './TaskContainer';

const Inprogress = () => {
  const [todos,setTodos] = useState([]);
  const inProgressTodos = useSelector(state => state.todo.inProgress)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo('InProgress'))
  },[dispatch])

  return(
    <Conatiner> 
      <div>
        <h2>InProgress</h2>
        <div>
          {inProgressTodos.map(todo =><TaskContainer key={todo.id} label="InProgress" {...todo}/>)}
        </div>
        {inProgressTodos.length === 0 ? <p>Empty!</p> : null}
      </div>
    </Conatiner>
  )
}

export {Inprogress}

const Conatiner = styled.div`
  /* border:1px solid red; */
  padding:10px 6px;
  overflow-y:scroll;

  & > div{
  border:1px solid teal;
   & > h2{
     text-align:center;
     font-size:24px;
     padding:6px;
     background-color:#bfb051;
   }
   h2+div{
      padding:10px 16px;
   }
  }
`