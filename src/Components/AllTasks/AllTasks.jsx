import React from 'react'
import styled from 'styled-components'
import { Categories } from './Categories'
import { Done } from './Done'
import { Inprogress } from './Inprogress'
import { Todo } from './Todo'

const AllTasks = () => {
  return(
    <Container>
      {/* <Todo />
      <Inprogress />
      <Done /> */}
      <Categories label="Todo"/>
      <Categories label="InProgress"/>
      <Categories label="Done"/>

    </Container>
  )
}

export {AllTasks}

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  height:100%;
  /* border:1px solid red; */
  &  > div{
    flex:1;
    /* flex-basis:33%; */
    max-width:33%;
  }
`