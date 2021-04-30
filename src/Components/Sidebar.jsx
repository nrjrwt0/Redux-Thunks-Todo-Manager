import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logoutSuccess } from '../Redux/Auth/action'
import { addFilterByTag } from '../Redux/Todos/action'

const Sidebar = () => {

  const todos = useSelector(state => state.todo.todos);
  const inProgress = useSelector(state => state.todo.inProgress);
  const done = useSelector(state => state.todo.done);
  const filterTag = useSelector(state => state.todo.filterTag)

  const userName = useSelector(state => state.auth.userName);
  const userEmail = useSelector(state => state.auth.userEmail);


  const dispatch = useDispatch();

  const addFilterTag = (e) => {
    const selectedTag = e.target.value;
    dispatch(addFilterByTag(selectedTag))
  }

  const handleLogout = () => {
    dispatch(logoutSuccess());
  }

  return(
    <Container>
      <Details>
        <h3>{userName}</h3>
        <h4>{userEmail}</h4>
      </Details>

      <Tags filterTag={filterTag}>
        <button value="all" onClick={addFilterTag}>All <span>{todos.length + inProgress.length + done.length}</span></button>
        <button value="personal" onClick={addFilterTag}>Personal <span>{todos.length}</span></button>
        <button value="official" onClick={addFilterTag}>Official <span>{inProgress.length}</span></button>
        <button value="others" onClick={addFilterTag}>Others <span>{done.length}</span></button>
      </Tags>

      <Logout>
        <button onClick={handleLogout}>Logout</button>
      </Logout>

    </Container>
  )
}

export {Sidebar}


const Container = styled.div`
  flex:1;
  border-right:2px solid teal;
  padding:16px 10px;
  display:flex;
  flex-direction:column;
`
const Details = styled.div`
  flex:3;
`
const Tags = styled.div`
  flex:8;
  display:flex;
  flex-direction:column;
  padding:12px;
  button{
    width:100%;
    color:#21209c;
    /* 532e1c */
    font-size:15px;
    font-weight:bolder;
    margin:8px 0;
    padding:7px 0px;
    cursor: pointer;
    border:none;
  }
  button:first-child{
    background-color:#77acf1;
  }
  button:nth-child(2){
    background-color:#aad8d3;
    opacity: ${props => props.filterTag ===  "personal" ? 0.5 : 1}
  }
  button:nth-child(3){
    background-color:#f3bda1;
    opacity: ${props => props.filterTag ===  "official" ? 0.5 : 1}
  }
  button:nth-child(4){
    background-color:#f05945;
    opacity: ${props => props.filterTag ===  "others" ? 0.5 : 1}
  }
  button:hover{
    opacity:0.7;
  }
`

const Logout = styled.div`
  flex:1;
  text-align:center;
  button{
    padding:6px 16px;
    cursor: pointer;
    background-color:#394867;
    color:wheat;
    border:none;
  }
  button:hover{
    opacity:0.7;
  }

`