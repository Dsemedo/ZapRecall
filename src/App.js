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
    height: 600px;
    width: 420px;
    display: flex;
    justify-content: center;
    align-items: center;

`

