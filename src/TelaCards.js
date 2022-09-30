import { useState } from "react";
import styled from "styled-components";
import SmallLogo from "./assets/img/logo.png"
import SetaVirar from "./assets/img/seta_virar.png"
// import IconeZap from "./assets/img/icone_certo.png"
// import IconeError from "./assets/img/icone_erro.png"
// import IconeAlmost from "./assets/img/icone_quase.png"

export default function TelaCards() {
  const [cardOpen, setCardOpen] = useState([]);
  const [answerOpen, setAnswerOpen] = useState([])
  const [cardError, setCardError] = useState([]);
  const [cardAlmost, setcardAlmost] = useState([]);
  const [cardZap, setcardZap] = useState([]);



  const decks = [{ Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }]

  console.log(cardAlmost)
  console.log(cardError)
  console.log(cardZap)

  function CardClosed(props) {
    const { number, questions } = props;

    if (cardError.includes(number)) {
      return (

        <CardErrorClosed>
          Pergunta {number + 1}
        </CardErrorClosed>
      )

    } else if (cardAlmost.includes(number)) {
      return (

        <CardAlmostClosed>
          Pergunta {number + 1}
        </CardAlmostClosed>
      )

    } else if (cardZap.includes(number)) {
      return (

        <CardZapClosed>
          Pergunta {number + 1}
        </CardZapClosed>
      )
    }

    else if (answerOpen.includes(number)) {
      return (
        <FlashCardAnswer>

          {questions.Resposta}

          <ContainerButton>

            <Button cor={`#FF3030`} onClick={() => setCardError([...cardError, number])}>
              Não lembrei
            </Button>

            <Button cor={`#FF922E`} onClick={() => setcardAlmost([...cardAlmost, number])}>
              Quase não lembrei </Button>

            <Button cor={`#2FBE34`} onClick={() => setcardZap([...cardZap, number])}>
              Zap!!
            </Button>
          
          </ContainerButton>

        </FlashCardAnswer>

      )
    }

    else if (cardOpen.includes(number)) {
      return (
        <FlashCardOpened>
          {questions.Pergunta}
          <TurnAnswer src={SetaVirar} onClick={() => setAnswerOpen([...answerOpen, number])} />
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


  return (
    <>
      <Topo>
        <LogoMenor src={SmallLogo} />
        ZapRecall
      </Topo>

      <Cards>
        {decks.map((Q, index) => <CardClosed questions={Q} number={index} />)}
      </Cards>

      <Footer>
        0/4 CONCLUIDOS

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

`

const CardErrorClosed = styled.div`
    width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  text-decoration: line-through; 
  color: #FF3030;;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;

`

const CardZapClosed = styled.div`
    width: 300px;
  height: 50px;
  display: flex;
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

`

const TurnAnswer = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 175px;
  margin-top: 80px;
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
    background-color: red;
    box-shadow: 0px 4px 5px ;
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
  `

const FlashCardOpened = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  background-color: #FFFFD4;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
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