import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodo, getTodoFailure, getTodoRequest, getTodoSuccess } from '../../Redux/Todos/action';
import { TaskContainer } from './TaskContainer';

const Todo = () => {
  // const [todos,setTodos] = useState([]);
  const todos = useSelector(state => state.todo.todos)
  
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTodoRequest());
    // axios.get(`https://json-server-mocker-neeraj-data.herokuapp.com/todoManager?progress=Todo`).then((res) => {console.log(res.data); setTodos(res.data); dispatch(getTodoSuccess())})
    // .catch(() => dispatch(getTodoFailure()));

    dispatch(getTodo('Todo'))

  },[dispatch])

  return(
    <Conatiner>
      <div>
        <h2>Todo</h2>
        <div>
          {todos.map(todo =><TaskContainer key={todo.id} label="Todo" {...todo}/>)}
        </div>
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