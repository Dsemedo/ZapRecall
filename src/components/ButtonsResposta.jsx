import styled from "styled-components";

export function ButtonsResposta({ responder }) {
  return (
    <ContainerButton>
      <Button
        data-identifier="forgot-btn"
        cor={`#FF3030`}
        onClick={() => responder("nao")}
      >
        Não lembrei
      </Button>

      <Button
        data-identifier="almost-forgot-btn"
        cor={`#FF922E`}
        onClick={() => responder("quase")}
      >
        Quase não lembrei{" "}
      </Button>

      <Button
        data-identifier="zap-btn"
        cor={`#2FBE34`}
        onClick={() => responder("lembrei")}
      >
        Zap!!
      </Button>
    </ContainerButton>
  );
}
const Button = styled.div`
  background-color: ${(props) => props.cor};
  height: 30px;
  width: 90px;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const ContainerButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
