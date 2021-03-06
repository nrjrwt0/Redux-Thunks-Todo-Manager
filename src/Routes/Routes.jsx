import { useSelector } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import { CreateTodo } from "../Components/CreateTodo/CreateTodo"
import { Navbar } from "../Components/Navbar"
import { Sidebar } from "../Components/Sidebar"
import { AuthPage } from "./AuthPageRoute"
import { DashboardPage } from "./DashboardPage"
const Routes = () => {

  const isUserAuth = useSelector(state => state.auth.isUserAuth);
  
  return( !isUserAuth ?  <Conatiner>
      <AuthPage />
  </Conatiner>  :

    <Conatiner>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>

          <Route path="/create-new-task" exact>
            <CreateTodo/>
          </Route>
          <Redirect to="/dashboard"/>
        </Switch>
      </Wrapper>

    </Conatiner>
  )
}

export {Routes}


const Conatiner = styled.div`
  width:78%;
  height:80%;
  background-color: #000000d0;
  color: white;
  border-radius:10px;
  display:flex;
`

const Wrapper = styled.div`
  flex:4;
`