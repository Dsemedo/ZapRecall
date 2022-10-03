import { useState } from "react";
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import TelaCards from "./TelaCards"
import Logo from "./assets/img/logo.png"

export default function App(){
  
  const [iniciado, setIniciado] = useState(false); 

  function TelaInicio() {

    function TrocarTela() {
        setIniciado(!iniciado);
    }

    return (
        <Container>

            <Logomarca src={Logo} />
            ZapRecall
            <button onClick={TrocarTela}>Iniciar Recall!!</button>
        </Container>
    )
}

    return (

        <>
        <GlobalStyles />
        <Fundo>
          {iniciado ? <TelaCards /> : <TelaInicio/>}
        
        </Fundo>
        
        </>
    )    
}



const Logomarca = styled.img`
    width: 150px;
    height: 150px;

`

const Container = styled.div`
    padding-top: 50vw;
    position: relative;
    width: 330px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-family: 'Righteous', cursive;
    font-size: 38px;
    font-weight: bold;
    color: #FFFFFF;

button{
    width: 280px;
    height: 50px;
    color: #D70900;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
}
`

const Fundo = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 90vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

