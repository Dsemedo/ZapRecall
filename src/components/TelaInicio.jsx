import styled from "styled-components";
import Logo from "../assets/img/logo.png";

export function TelaInicio({ setIniciado, iniciado, ...props }) {
  return (
    <Container>
      <Logomarca src={Logo} />
      ZapRecall
      <button
        data-identifier="start-btn"
        onClick={() => setIniciado(!iniciado)}
      >
        Iniciar Recall!!
      </button>
    </Container>
  );
}

const Logomarca = styled.img`
  width: 150px;
  height: 150px;
`;

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
  font-family: "Righteous", cursive;
  font-size: 38px;
  font-weight: bold;
  color: #ffffff;

  button {
    width: 280px;
    height: 50px;
    color: #d70900;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
