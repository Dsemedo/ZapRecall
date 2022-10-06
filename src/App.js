import { useState } from "react";
import styled from "styled-components";
import { TelaInicio } from "./components/TelaInicio";
import GlobalStyles from "./GlobalStyles";
import TelaCards from "./TelaCards";

export default function App() {
  const [iniciado, setIniciado] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Fundo>
        {iniciado ? (
          <TelaCards />
        ) : (
          <TelaInicio iniciado={iniciado} setIniciado={setIniciado} />
        )}
      </Fundo>
    </>
  );
}

const Fundo = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 90vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
