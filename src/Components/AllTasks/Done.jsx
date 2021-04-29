import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TaskContainer } from './TaskContainer';

const Done = () => {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://json-server-mocker-neeraj-data.herokuapp.com/todoManager?progress=Done`).then((res) => {console.log(res.data); setTodos(res.data)})
  },[])

  return(
    <div>
      <h3>Done</h3>
      <div>
        {todos.map(todo =><TaskContainer {...todo}/>)}
      </div>
    </div>
  )
}

export {Done}