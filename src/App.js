import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import TelaCards from "./TelaCards"

export default function App(){
    return (

        <>
        <GlobalStyles />
        <Fundo>
        <TelaCards />
        </Fundo>
        
        </>
    )    
}

const Fundo = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 110vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

