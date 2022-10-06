import { useState } from "react";
import SetaVirar from "../assets/img/seta_virar.png";
import IconeZap from "../assets/img/icone_certo.png";
import IconeError from "../assets/img/icone_erro.png";
import IconeAlmost from "../assets/img/icone_quase.png";
import styled from "styled-components";
import { ButtonsResposta } from "./ButtonsResposta";

export function Card({
  number,
  questions,
  setTotalRespondidas,
  totalRespondidas,
}) {
  const [cardOpen, setCardOpen] = useState([]);
  const [answerOpen, setAnswerOpen] = useState([]);
  const [cardError, setCardError] = useState([]);
  const [cardAlmost, setcardAlmost] = useState([]);
  const [cardZap, setcardZap] = useState([]);

  const [respostaInfo, setRespostaInfo] = useState({});

  function responder(resposta) {
    const obj = {};
    if (resposta === "nao") {
      setCardError([...cardError, number]);
      obj.icon = IconeError;
      obj.color = "#ff3030";
    } else if (resposta === "lembrei") {
      setcardZap([...cardZap, number]);
      obj.icon = IconeZap;
      obj.color = "#2fbe34";
    } else {
      setcardAlmost([...cardAlmost, number]);
      obj.icon = IconeAlmost;
      obj.color = "#ff922e";
    }
    setTotalRespondidas(totalRespondidas + 1);
    setRespostaInfo(obj);
  }

  if (
    cardError.includes(number) ||
    cardAlmost.includes(number) ||
    cardZap.includes(number)
  ) {
    return (
      <CardStyled color={respostaInfo.color}>
        Pergunta {number + 1}
        <img
          alt=""
          data-identifier="flashcard-status"
          src={respostaInfo.icon}
        />
      </CardStyled>
    );
  } else if (answerOpen.includes(number)) {
    return (
      <FlashCardAnswer data-identifier="flashcard-answer">
        {questions.Resposta}

        <ButtonsResposta responder={responder} />
      </FlashCardAnswer>
    );
  } else if (cardOpen.includes(number)) {
    return (
      <FlashCardOpened data-identifier="flashcard-question">
        {questions.Pergunta}
        <TurnAnswer
          data-identifier="flashcard-turn-btn"
          src={SetaVirar}
          onClick={() => setAnswerOpen([...answerOpen, number])}
        />
      </FlashCardOpened>
    );
  } else {
    return (
      <FlashCardClosed onClick={() => setCardOpen([...cardOpen, number])}>
        Pergunta {number + 1}
      </FlashCardClosed>
    );
  }
}

const CardStyled = styled.div`
  width: 300px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: line-through;
  background-color: white;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: "Recursive", cursive;
  box-shadow: 0px 4px 5px;

  color: ${(props) => props.color};
`;

const TurnAnswer = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 93%;
  margin-top: 75px;
`;

const FlashCard = styled.div`
  width: 300px;

  margin: 10px 0px;
  padding: 10px 10px;

  display: flex;

  box-shadow: 0px 4px 5px;
  border-radius: 5px;

  font-family: "Recursive", cursive;
  color: black;

  cursor: pointer;
`;

const FlashCardClosed = styled(FlashCard)`
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const FlashCardOpened = styled(FlashCard)`
  height: 100px;
  flex-direction: column;
  background-color: #ffffd4;
`;

const FlashCardAnswer = styled(FlashCard)`
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffd4;
`;
