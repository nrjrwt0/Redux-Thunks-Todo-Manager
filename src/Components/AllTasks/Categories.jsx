import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { TaskContainer } from './TaskContainer';

const Categories = ({label}) => {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://json-server-mocker-neeraj-data.herokuapp.com/todoManager?progress=${label}`).then((res) => {console.log(res.data); setTodos(res.data)})
  },[])

  return(
    <Conatiner label={label}>
      <div>
        <h2>{label}</h2>
        <div>
          {todos.map(todo =><TaskContainer label={label} {...todo}/>)}
        </div>
      </div>
    </Conatiner>
  )
}

export {Categories}

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
     background-color: ${(props) => {
       return (props.label === "Todo" ? "#00917c" : props.label === "InProgress" ? "#bfb051" : "#8ac4d0")
       }}
   }
   h2+div{
      padding:10px 16px;
   }
  }
`