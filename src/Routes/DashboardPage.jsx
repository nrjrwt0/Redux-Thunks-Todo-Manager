import styled from "styled-components"
import { AllTasks } from "../Components/AllTasks/AllTasks"


const DashboardPage = () => {
  
  return(
    <Container>
      <AllTasks />
    </Container>
  )
}

export {DashboardPage}

const Container = styled.div`
  height:92%;
`
