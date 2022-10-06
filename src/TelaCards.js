import { useState } from "react";
import styled from "styled-components";
import SmallLogo from "./assets/img/logo.png";
import { Card } from "./components/Card";

import DECKS from "./decks";

export default function TelaCards() {
  const [totalRespondidas, setTotalRespondidas] = useState(0);

  function FooterBar() {
    return `${totalRespondidas}/${DECKS.length} CONCLUIDOS`;
  }

  return (
    <>
      <Topo>
        <LogoMenor src={SmallLogo} />
        ZapRecall
      </Topo>

      <Cards>
        {DECKS.map((Q, index) => (
          <Card
            key={index}
            data-identifier="flashcard"
            questions={Q}
            number={index}
            setTotalRespondidas={setTotalRespondidas}
            totalRespondidas={totalRespondidas}
          />
        ))}
      </Cards>

      <Footer>
        <FooterBar />
      </Footer>
    </>
  );
}

const Topo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
  margin-left: 20px;
`;
const LogoMenor = styled.img`
  width: 52px;
  height: 60px;
  margin-right: 20px;
`;

const Cards = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;

const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  border: 2px solid #333333;

  img {
    width: 20px;
    height: 20px;
  }
`;
