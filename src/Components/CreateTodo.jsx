import React from 'react'
import styled from 'styled-components'
import { Subtasks } from './Subtasks'

const CreateTodo = () => {
  return(
    <div>
      <div>

        <input type="date"/>
        <input type="text" placeholder="Title"/>
        <textarea cols="24" rows="6"></textarea>
        {/* <input type="text" placeholder="Title"/> */}
        <Subtasks />
      </div>
    </div>
  )
}

export {CreateTodo}


