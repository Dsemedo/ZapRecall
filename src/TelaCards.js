import styled from "styled-components";
import SmallLogo from "./assets/img/logo-pequeno.png"

export default function TelaCards() {


    const decks = [{ Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }, { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" }]




    return (
        <>
            <Topo>
                <LogoMenor src={SmallLogo} />
                ZapRecall
            </Topo>

            <Cards>
                {decks.map((P, index) => <CardFechado />)}
            </Cards>

            <Footer>
                <Botoes>

                    <ButtError>
                        Não lembrei
                    </ButtError>

                    <ButtAlmost>
                        Quase não lembrei
                    </ButtAlmost>


                    <ButtZap>
                        Zap!!

                    </ButtZap>

                </Botoes>

                0/4 CONCLUIDOS

            </Footer>
        </>
    )

    function CardFechado(props) {

        return (
            <FlashCard>
                Pergunta {props.index}
            </FlashCard>
        )
    }

}


const Topo = styled.div`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;
  font-family: "Righteous";
  z-index: 1;
`
const LogoMenor = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: red;

`
const FlashCard = styled.div`
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

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
  z-index: 1;
  width: 100%;
  min-height: 90px;
  font-size: 18px;
  color: black;
  font-family: 'Recursive', sans-serif;
  position: fixed;
  text-align: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`

const ButtError = styled.button`
background-color:#FF3030;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`

const ButtAlmost = styled.button`
background-color:#FF922E;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`

const ButtZap = styled.button`
background-color: #2FBE34;
border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`

const Botoes = styled.div`
  width: 100%;
  height: 40px;
  background-color: green;
  display: flex;
  justify-content: space-around;
  align-items: center;

`