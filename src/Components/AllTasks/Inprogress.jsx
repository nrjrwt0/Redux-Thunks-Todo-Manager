import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TaskContainer } from './TaskContainer';

const Inprogress = () => {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://json-server-mocker-neeraj-data.herokuapp.com/todoManager?progress=InProgress`).then((res) => {console.log(res.data); setTodos(res.data)})
  },[])

  return(
    <div>
      <h3>In Progress</h3>
      <div>
        {todos.map(todo =><TaskContainer {...todo}/>)}
      </div>
    </div>
  )
}

export {Inprogress}