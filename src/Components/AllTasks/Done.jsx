import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodo, getTodoFailure, getTodoRequest, getTodoSuccess } from '../../Redux/Todos/action';
import { TaskContainer } from './TaskContainer';

const Done = () => {
  const doneTodos = useSelector(state => state.todo.done);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo('Done'))
  },[dispatch])

  return(
    <Conatiner>
      <div>
        <h2>Done</h2>
        <div>
          {doneTodos.map(todo =><TaskContainer key={todo.id} label="Done" {...todo}/>)}
        </div>
        {doneTodos.length === 0 ? <p>Empty!</p> : null}
      </div>
    </Conatiner>
  )
}

export {Done}

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
     background-color:#8ac4d0;
   }
   h2+div{
      padding:10px 16px;
   }
  }
`