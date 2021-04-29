import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addProgress, addTags } from '../../Redux/CreateTodo/action';

const TagsAndProgress = () => {
  const progress = useSelector(state => state.progress);
  const tags = useSelector(state => state.tags);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name,value,type,checked} = e.target;
    if(name === "progress"){
      dispatch(addProgress(value));
    }  else if(type === "checkbox"){
        const payload = {...tags, [name]: checked};
        dispatch(addTags(payload))
    }
  }

  return(
    <>
      <Box>
        <label>Progress</label>
        <div>
          <input type="radio" name="progress" value="Todo" id="todo" onChange={handleChange} checked={progress === "Todo"}/>
          <label htmlFor="todo" >Todo</label>
          <br/>
          <input type="radio" name="progress" value="InProgress" id="inProgress" onChange={handleChange} checked={progress === "InProgress"}/>
          <label htmlFor="inProgress" >In Progress</label>
          <br/>
          <input type="radio" name="progress" value="Done" id="done" onChange={handleChange} checked={progress === "Done"}/>
          <label htmlFor="done" >Done</label>
        </div>
      </Box>

      <Box>
        <label>Tags (multiple possible)</label>
        <div>
          <input type="checkbox" name="personal" value="Personal" id="personal" onChange={handleChange} checked={tags.personal}/>
          <label htmlFor="personal">Personal</label>
          <br/>
          <input type="checkbox" name="official" value="Official" id="official" onChange={handleChange} checked={tags.official}/>
          <label htmlFor="official">Official</label>
          <br/>
          <input type="checkbox" name="others" value="Others" id="others" onChange={handleChange} checked={tags.others}/>
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
