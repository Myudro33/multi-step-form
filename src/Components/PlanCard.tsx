import React from "react";
import styled from "styled-components";
import advanced from "../assets/icon-advanced.svg";

interface PlanCardProps {
  id: number;
  name: string;
  price: number;
  yearlyPrice?: number;
  yearly: boolean;
  src: string;
  setselectedPlan: React.Dispatch<React.SetStateAction<any>>;
  selectedPlan: {
    name: string;
    price: number;
    plan: string;
  };
  setselect: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlanCard = ({
  id,
  name,
  price,
  yearlyPrice,
  yearly,
  src,
  selectedPlan,
  setselectedPlan,
  setselect,
}: PlanCardProps) => {
  const clickHandler = () => {
    
    setselectedPlan({
      name: name,
      plan: yearly ? "Yearly" : "Monthly",
      price: yearly ? yearlyPrice : price,
    });
    setselect(false);
  };
  return (
    <Container selected={selectedPlan.name === name} onClick={clickHandler}>
      <Image src={src} alt="icon" />
      <TitleWrapper>
        <PlanTitle>{name}</PlanTitle>
        <PlanPrice>{yearly ?`$${yearlyPrice}/yr`  : `$${price}/mo`}</PlanPrice>
        {yearly && <YearlyTitle>2 month free</YearlyTitle>}
      </TitleWrapper>
    </Container>
  );
};

export default PlanCard;

const YearlyTitle = styled.p`
  color: #02295a;
  font-size: 14px;
  margin-top: 5px;
`;
const PlanPrice = styled.p`
  color: #9699ab;
  font-size: 16px;
  font-weight: 600;
`;
const PlanTitle = styled.p`
  color: #02295a;
  font-size: 18px;
  font-weight: 700;
  margin: 5px 0px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 400px) {
    width: 45px;
    height: 45px;
  }
`;

const Container = styled.div`
  width: 190px;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) =>
    props.selected ? "hsl(217, 100%, 97%)" : "transparent"};
  border: ${(props) =>
    props.selected
      ? "2px solid hsl(228, 100%, 84%)"
      : "2px solid hsl(229, 24%, 87%);"};
  transition: 0.5s;
  cursor: pointer;
`;
