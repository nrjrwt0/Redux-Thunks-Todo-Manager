import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpCall, signUpFailure, signUpRequest, signUpSuccess } from '../../Redux/Auth/action';
import { loadData } from '../../Utils/localStorage';

const initState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const [formData,setFormData] = useState(initState);
  const [isEmailPresentAlready, setIsEmailPresentAlready] = useState(false);

  const [isBothPassMatch, setIsBothPassMatch] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    const payload = {
      ...formData,
      [name]: value
    }
    setFormData(payload)
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      return setIsBothPassMatch(true);
    } 

    let userData = loadData('userData');
    if (!userData) {
      userData = [];
    }
    const isExistedEmail = userData.filter((data) => formData.email === data.email);
    if(isExistedEmail.length > 0){
      return setIsEmailPresentAlready(true);
    } 
    userData.push(formData);
    dispatch(signUpSuccess(userData));

    setFormData(initState);
  }

  useEffect(() => {
    const emailTimer = setTimeout(() => {
      setIsEmailPresentAlready(false)
    },2500)

    const passwordTimer = setTimeout(() => {
      setIsBothPassMatch(false)
    },2500)
    return(() => {
      clearTimeout(emailTimer)
      clearTimeout(passwordTimer)
    })

  },[isEmailPresentAlready,isBothPassMatch])

  return(
    <div>
      <div>
      <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
        <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
          <input type="text" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
          <input type="text" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
          <input type="submit" value="Signup"/>
        </form>
        {isBothPassMatch ? <span style={{color:"red"}}>Password doesn't match</span> : null}
        {isEmailPresentAlready ? <span style={{color:"red"}}>Email already exist</span> : null}
        <span>Already have an account <Link to="/login">Login</Link> here</span>
      </div>
    </div>
  )

}

export {SignUp}