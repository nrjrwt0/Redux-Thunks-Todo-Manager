import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodo, getTodoFailure, getTodoRequest, getTodoSuccess } from '../../Redux/Todos/action';
import { TaskContainer } from './TaskContainer';

const Todo = () => {
  const todos = useSelector(state => state.todo.todos)
  const filterBy = useSelector(state => state.todo.filterBy)
  
  const dispatch = useDispatch();

  const filterTodos = (item) => {
    let filterTagStatus = true;

    if(filterBy === "personal"){
      filterTagStatus = item.tags.personal;
    } else if(filterBy === "official"){
      filterTagStatus = item.tags.official;
    } else if(filterBy === "others"){
      filterTagStatus = item.tags.others;
    }
    return filterTagStatus;
  }

  useEffect(() => {
    dispatch(getTodo('Todo'))
  },[dispatch])

  return(
    <Conatiner>
      <div>
        <h2>Todo</h2>
        <div>
          {todos.filter(filterTodos).map(todo =><TaskContainer key={todo.id} label="Todo" {...todo}/>)}
        </div>
        {todos.length === 0 ? <P>Empty!</P> : null}
      </div>
    </Conatiner>
  )
}

export {Todo}

const Conatiner = styled.div`
  padding:10px 6px;
  overflow-y:scroll;



  & > div{
  border:1px solid teal;
   & > h2{
     text-align:center;
     font-size:24px;
     padding:6px;
     background-color:#00917c;
   }
   h2+div{
      padding:10px 16px;
   }
  }
`

const P = styled.p`
  text-align:center;
  margin:6px 0px 12px;
  opacity:0.8;
`