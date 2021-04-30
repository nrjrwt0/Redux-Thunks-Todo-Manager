import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodo, getTodoFailure, getTodoRequest, getTodoSuccess } from '../../Redux/Todos/action';
import { TaskContainer } from './TaskContainer';

const Done = () => {
  const doneTodos = useSelector(state => state.todo.done);
  const filterTag = useSelector(state => state.todo.filterTag)
  
  const dispatch = useDispatch();

  const filterTodos = (item) => {
    let filterTagStatus = true;

    if(filterTag === "personal"){
      filterTagStatus = item.tags.personal;
    } else if(filterTag === "official"){
      filterTagStatus = item.tags.official;
    } else if(filterTag === "others"){
      filterTagStatus = item.tags.others;
    }
    return filterTagStatus;
  }
  

  useEffect(() => {
    dispatch(getTodo('Done'))
  },[dispatch])

  return(
    <Conatiner>
      <div>
        <h2>Done</h2>
        <div>
          {doneTodos.filter(filterTodos).map(todo =><TaskContainer key={todo.id} label="Done" {...todo}/>)}
        </div>
        {doneTodos.length === 0 ? <P>Empty!</P> : null}
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
const P = styled.p`
  text-align:center;
  margin:6px 0px 12px;
  opacity:0.8;
`