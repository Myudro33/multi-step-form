import React, { useState } from "react";
import styled from "styled-components";

interface CardProps {
  id: number;
  title: string;
  paragraph: string;
  price: number;
  active: boolean;
  setaddon: React.Dispatch<React.SetStateAction<any>>;
  selectedPlan:{
    name:string;
    plan:string
  }
}

const AddonCard = ({
  active,
  id,
  paragraph,
  price,
  title,
  setaddon,
  selectedPlan
}: CardProps) => {
  const [selected, setselected] = useState(false);
  
  const clickHandler = () => {
    setselected(!selected);
    if (!selected) {
      const sameElement = (element) => element.name === title;
      setaddon((prev) => {
        if (!prev.some(sameElement)) {
          return [...prev, { name: title, price: price }];
        }
        return prev;
      });
    } else {
      setaddon((prev) => prev.filter((item) => item.name !== title));
    }
  };
  return (
    <Container onClick={clickHandler} active={selected}>
      <LeftContainer>
        <Checkbox
          onChange={() => setselected(!selected)}
          checked={selected}
          type="checkbox"
        />
        <TitleContainer>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
        </TitleContainer>
      </LeftContainer>
      <Paragraph>{`$${price}/${selectedPlan.plan==='Monthly'?'mo':'yr'}`}</Paragraph>
    </Container>
  );
};

export default AddonCard;

const Checkbox = styled.input`
  width: 18px;
  transform: translateY(-0.075em);
  transition: 2s;
`;

const Paragraph = styled.p`
  color: #9699ab;
  font-size: 16px;
  font-weight: 700;
`;
const Title = styled.p`
  color: #02295a;
  font-size: 18px;
  font-weight: 700;
`;
const LeftContainer = styled.div`
  display: flex;
  width: 300px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props) =>
    props.active
      ? "2px solid hsl(228, 100%, 84%)"
      : "2px solid hsl(229, 24%, 87%)"};
  background-color: ${(props) =>
    props.active ? "hsl(217, 100%, 97%)" : "transparent"};
  border-radius: 10px;
  margin: 10px 0px;
  padding: 15px;
  cursor: pointer;
  transition: 0.5s;
`;
