import { Link } from "react-router-dom"
import styled from "styled-components"

const links = [
  {
    to:"/dashboard",
    title: "Dashboard"
  },
  {
    to:"/create-new-task",
    title: "Create New Task"
  },
]

const Navbar = () => {

  
  return( 
    <Container> 
      {links.map(({to,title}) => {
        return (
          <Link to={to} key={title}>{title}</Link>
        )
      })}
      </Container>
  )
}

export {Navbar}

const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  height:6%;
  border-bottom:2px solid teal;
  a{
    font-size:18px;
    font-weight:600;
    color:teal;
    text-decoration:none;
  }
`