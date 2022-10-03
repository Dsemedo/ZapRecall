import { useState } from "react";
import styled from "styled-components";
import SmallLogo from "./assets/img/logo.png"
import SetaVirar from "./assets/img/seta_virar.png"
import IconeZap from "./assets/img/icone_certo.png"
import IconeError from "./assets/img/icone_erro.png"
import IconeAlmost from "./assets/img/icone_quase.png"
import DECKS from "./decks";

export default function TelaCards() {
  const [cardOpen, setCardOpen] = useState([]);
  const [answerOpen, setAnswerOpen] = useState([])
  const [cardError, setCardError] = useState([]);
  const [cardAlmost, setcardAlmost] = useState([]);
  const [cardZap, setcardZap] = useState([]);


  function CardClosed(props) {
    const { number, questions } = props;

    if (cardError.includes(number)) {
      return (

        <CardErrorClosed>
          Pergunta {number + 1}
          <img data-identifier="flashcard-status" src={IconeError}/>
        </CardErrorClosed>
      )

    } else if (cardAlmost.includes(number)) {
      return (

        <CardAlmostClosed>
          Pergunta {number + 1}
          <img data-identifier="flashcard-status" src={IconeAlmost} />
        </CardAlmostClosed>
      )

    } else if (cardZap.includes(number)) {
      return (

        <CardZapClosed >
          Pergunta {number + 1}
          <img data-identifier="flashcard-status" src={IconeZap} />
        </CardZapClosed>
      )
    }

    else if (answerOpen.includes(number)) {
      return (
        <FlashCardAnswer data-identifier="flashcard-answer">

          {questions.Resposta}

          <ContainerButton>

            <Button data-identifier="forgot-btn" cor={`#FF3030`} onClick={() => setCardError([...cardError, number])}>
              Não lembrei
            </Button>

            <Button data-identifier="almost-forgot-btn" cor={`#FF922E`} onClick={() => setcardAlmost([...cardAlmost, number])}>
              Quase não lembrei </Button>

            <Button data-identifier="zap-btn" cor={`#2FBE34`} onClick={() => setcardZap([...cardZap, number])}>
              Zap!!
            </Button>

          </ContainerButton>

        </FlashCardAnswer>

      )
    }

    else if (cardOpen.includes(number)) {
      return (
        <FlashCardOpened data-identifier="flashcard-question">
          {questions.Pergunta}
          <TurnAnswer data-identifier="flashcard-turn-btn"src={SetaVirar} onClick={() => setAnswerOpen([...answerOpen, number])} />
        </FlashCardOpened>
      )
    }

    else {
      return (
        <FlashCardClosed onClick={() => setCardOpen([...cardOpen, number])}>
          Pergunta {number + 1}
        </FlashCardClosed>
      )
    }
  }

  function FooterBar() {

    return (
      `${cardAlmost.length + cardError.length + cardZap.length}/${DECKS.length} CONCLUIDOS`
    )

  }

  return (
    <>
      <Topo>
        <LogoMenor src={SmallLogo} />
        ZapRecall
      </Topo>

      <Cards>
        {DECKS.map((Q, index) => <CardClosed  data-identifier="flashcard" questions={Q} number={index} />)}
      </Cards>

      <Footer>
        <FooterBar />
      </Footer>
    </>
  )

}

const CardAlmostClosed = styled.div`
    width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: line-through; 
  background-color: white;
  color: #FF922E;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
    box-shadow: 0px 4px 5px ;

`

const CardErrorClosed = styled.div`
    width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: line-through; 
  background-color: white;
  color: #FF3030;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
    box-shadow: 0px 4px 5px ;

`

const CardZapClosed = styled.div`

box-shadow: 0px 4px 5px ;
    width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: line-through; 
  background-color: white;
  color: #2FBE34;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;

  img {
    width: 20px;
    height:20px;
  }

`

const TurnAnswer = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 93%;
  margin-top: 75px;
`

const Topo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
`
const LogoMenor = styled.img`
    width: 52px;
    height: 60px;
    margin-right: 20px;
`

const Cards = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
`
const FlashCardClosed = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
    box-shadow: 0px 4px 5px ;
  `

const FlashCardOpened = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFD4;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
    box-shadow: 0px 4px 5px ;
  `

const FlashCardAnswer = styled.div`
width: 300px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #FFFFD4;
color: black;
border-radius: 5px;
margin: 10px 0px;
padding: 10px 10px;
cursor: pointer;
font-family: 'Recursive', cursive;
    box-shadow: 0px 4px 5px ;
`

const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  border: 2px solid #333333;

  img {
    width: 20px;
    height: 20px;
  }
`

const Button = styled.div`
background-color: ${props => props.cor};
height: 30px;
width: 90px;
border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  
`

const ContainerButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`