import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const initState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const [formData,setFormData] = useState(initState);

  const handleChange = (e) => {
    const {name,value} = e.target;
    const payload = {
      ...formData,
      [name]: value
    }
    setFormData(payload)
  }

  return(
    <div>
      <div>
      <h1>Sign Up</h1>
        <form>
        <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
        <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
          <input type="text" placeholder="Password" name="password" onChange={handleChange}/>
          <input type="text" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange}/>
          <input type="submit" value="Signup"/>
        </form>
        <span>Already have an account <Link to="/login">Login</Link> here</span>
      </div>
    </div>
  )

}

export {SignUp}