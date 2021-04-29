import React from 'react'
import styled from 'styled-components'

const TagsAndProgress = () => {
  return(
    <>
      <Box>
        <label>Progress</label>
        <div>
          <input type="radio" name="progress" value="Todo" id="todo"/>
          <label htmlFor="todo">Todo</label>
          <br/>
          <input type="radio" name="progress" value="In Progress" id="inProgress"/>
          <label htmlFor="inProgress">In Progress</label>
          <br/>
          <input type="radio" name="progress" value="Done" id="done"/>
          <label htmlFor="done">Done</label>
        </div>
      </Box>

      <Box>
        <label>Tags (multiple possible)</label>
        <div>
          <input type="checkbox" value="Personal" id="personal"/>
          <label htmlFor="personal">Personal</label>
          <br/>
          <input type="checkbox" value="Official" id="official"/>
          <label htmlFor="official">Official</label>
          <br/>
          <input type="checkbox" value="Others" id="others"/>
          <label htmlFor="others">Others</label>
        </div>
      </Box>
    </>
  )
}

export {TagsAndProgress}


const Box = styled.div`
 &  > label{
   display:inline-block;
  font-weight:bolder;
  color:#487e95;
  font-size:18px;
  margin:12px 0px;
 }
 & > div > label{
  display:inline-block;
  font-size:16px;
  font-weight:540;
  margin:8px 6px;
 }
`
