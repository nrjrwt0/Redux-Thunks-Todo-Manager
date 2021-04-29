import React from 'react'

const TagsAndProgress = () => {
  return(
    <div>
      <div>
        <label>Progress</label>
        <div>
          <input type="radio" name="progress" value="Todo" id="todo"/>
          <label htmlFor="todo">Todo</label>
          <input type="radio" name="progress" value="In Progress" id="inProgress"/>
          <label htmlFor="inProgress">In Progress</label>
          <input type="radio" name="progress" value="Done" id="done"/>
          <label htmlFor="done">Done</label>
          </div>
      </div>

      <div>
        <label>Tags (multiple possible)</label>
        <div>
          <input type="checkbox" value="Personal" id="personal"/>
          <label htmlFor="personal">Personal</label>
          <input type="checkbox" value="Official" id="official"/>
          <label htmlFor="official">Official</label>
          <input type="checkbox" value="Others" id="others"/>
          <label htmlFor="others">Others</label>
        </div>
      </div>
    </div>
  )
}

export {TagsAndProgress}