import { Route, Switch } from "react-router-dom"
import styled from "styled-components"
import { Navbar } from "../Components/Navbar"
import { Sidebar } from "../Components/Sidebar"
import { DashboardPage } from "./DashboardPage"
const Routes = () => {
  
  return(
    <Conatiner>
      <Sidebar />

      <Wrapper>
        <Navbar />

        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </Wrapper>

    </Conatiner>
  )
}

export {Routes}


const Conatiner = styled.div`
  width:80%;
  height:80%;
  background-color: #000000d0;
  color: white;
  border-radius:10px;
  display:flex;
`

const Wrapper = styled.div`
  flex:4;
  /* padding:10px; */
`