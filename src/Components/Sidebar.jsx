import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addFilterByTag } from '../Redux/Todos/action'

const Sidebar = () => {

  const dispatch = useDispatch();

  const addFilterTag = (e) => {
    const selectedTag = e.target.value;
    dispatch(addFilterByTag(selectedTag))
  }

  return(
    <Container>
      <Details>
        <h3>Neeraj Rawat</h3>
        <h4>neerajrawat@gmail.com</h4>
      </Details>

      <Tags>
        <button value="all" onClick={addFilterTag}>All <span>{4}</span></button>
        <button value="personal" onClick={addFilterTag}>Personal <span>{1}</span></button>
        <button value="official" onClick={addFilterTag}>Official <span>{2}</span></button>
        <button value="others" onClick={addFilterTag}>Others <span>{1}</span></button>
      </Tags>

      <Logout>
        <button>Logout</button>
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
  }
  button:nth-child(3){
    background-color:#f3bda1;
  }
  button:nth-child(4){
    background-color:#f05945;
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