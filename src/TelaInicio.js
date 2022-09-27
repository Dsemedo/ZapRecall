import styled from "styled-components";
import Logo from "./assets/img/logo.png"

export default function TelaInicio() {

    function TrocarTela() {
        alert("fui clicado")
    }


    return (
        <Container>

            <Logomarca src={Logo} />
            ZapRecall
            <button onClick={TrocarTela}>Iniciar Recall!!</button>

        </Container>
    )
}

const Logomarca = styled.img`
    width: 120px;
    height: 120px;

`

const Container = styled.div`
    position: relative;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    font-family: 'Righteous', cursive;
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;

button{
    width: 180px;
    height: 50px;
    color: #D70900;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
}
`