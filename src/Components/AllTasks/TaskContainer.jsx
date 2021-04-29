import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeProgress, deleteTodo } from '../../Redux/Todos/action';

const TaskContainer = ({label,id,title,description,date,progress,tags,subtasks}) => {
  const {personal,official,others} = tags;
  
  const dispatch = useDispatch();

  const handleChangeProgress = (e) => {
    const value  = e.target.value;
    const [todoId,updatedProgress] = value.split(',') ;
    console.log(todoId,updatedProgress)
    dispatch(changeProgress(todoId,updatedProgress))
  }

  const handleDeleteTodo = (id) => {
    console.log(id)
    dispatch(deleteTodo(id))
  }

  return(
    <Box label={label}>
      <div>
       <button>{date}</button>
      </div>
      <h3>{title}</h3>
      <div>
        {tags.personal ? <button style={{backgroundColor:"#aad8d3"}}>Personal</button> : null}
        {tags.official ? <button style={{backgroundColor:"#f3bda1"}}>Official</button> : null}
        {tags.others ?  <button style={{backgroundColor:"#f05945"}}>Others</button> : null}
      </div>
      <p>{description}</p>
      <SubtasksDiv>
          {subtasks?.map(({id,title,status}) => {
          return (
            <div key={id}>
              <h5>{title}</h5>
              <div>
                <button>{status ?<i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i> }</button>
                <button><i className="fas fa-trash"></i></button>
              </div>
            </div>
          ) 
          })}
        </SubtasksDiv>
        <ChangeProgress>
            {["Todo","InProgress","Done"].map((item) => item !== label ? <button key={item} value={[id,item]} onClick={handleChangeProgress}>{item}</button> : null)}
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
        </ChangeProgress>
    </Box>
  )
}

export {TaskContainer}


const Box = styled.div`
  border:1px solid #333;
  padding:12px 8px;
  margin:14px 0px;

  & > div:first-child{
    text-align:right;
    button{
      padding:4px 6px;
      border-radius:2px;
      font-weight:600;
      margin-right:4px;
      margin-bottom:6px;
      background-color:transparent;
      color:white;
      border:1px solid #487e95;
    }
  }

  h3{
    color: ${(props) => (props.label === "Todo" ? "#00917c" : props.label === "InProgress" ? "#bfb051" : "#8ac4d0")}
  }

  h3+div{
    margin:8px 0px;
    button{
      padding:4px 6px;
      border-radius:2px;
      font-weight:600;
      margin-right:4px;
      color:#21209c;
      border:none;
    }
  }
  & > p{
    font-size:14px;
    margin:12px 0px;
  }

`

const SubtasksDiv = styled.div`
  max-height:26vh;
  overflow-y:scroll;
  & > div{
    width:100%;
    padding:10px 12px;
    font-size:16px;
    margin:10px auto;
    display:flex;
    justify-content:space-between;
    border:2px solid #487e95;
    border-radius:4px;
    div{
      display:flex;
      justify-content:space-around;
      align-items:center;
      button{
        padding:0px 4px;
        font-size:15px;
        background-color:transparent;
        color:teal;
        border:none;
      }
    }
  }
`

const ChangeProgress = styled.div`
  margin-top:14px;
  text-align:right;
    button{
      padding:4px 6px;
      border-radius:2px;
      font-weight:600;
      margin-right:4px;
      margin-bottom:6px;
      background-color:transparent;
      color:white;
      cursor: pointer;
      border:1px solid #487e95;
    }
`