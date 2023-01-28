import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph, Title, Container, Button } from "./PersonalInfo";
import PlanCard from "./PlanCard";
import arcade from "../assets/icon-arcade.svg";
import advance from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

interface PlanProps {
  setpage: React.Dispatch<React.SetStateAction<number>>;
  setselectedPlan: React.Dispatch<React.SetStateAction<any>>;
  selectedPlan: {
    name: string;
    price: string;
    plan: string;
  };
}

const SelectPlan = ({ setpage, selectedPlan, setselectedPlan }: PlanProps) => {
  const [plan, setplan] = useState(false);
  const [select, setselect] = useState(false);
  const data = [
    {
      id: 1,
      name: "Arcade",
      price: "$9/mo",
      yearlyPrice: "$90/yr",
      yearly: plan,
      src: arcade,
    },
    {
      id: 2,
      name: "Advance",
      price: "$12/mo",
      yearlyPrice: "$120/yr",
      yearly: plan,
      src: advance,
    },
    {
      id: 3,
      name: "Pro",
      price: "$15/mo",
      yearlyPrice: "$150/yr",
      yearly: plan,
      src: pro,
    },
  ];
  const submitHandler = () => {
    if (selectedPlan.name === "") {
      setselect(true);
    } else {
      setpage(3)
    }
  };

  return (
    <Container>
      <Title>Select your plan</Title>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <Wrapper>
        <PlanWrapper>
          {data.map((item) => (
            <PlanCard
              setselect={setselect}
              selectedPlan={selectedPlan}
              setselectedPlan={setselectedPlan}
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              yearly={item.yearly}
              yearlyPrice={item.yearlyPrice}
              src={item.src}
            />
          ))}
        </PlanWrapper>
        <BottomWrapper>
          <ErrorTitle>{select && "Please select a plan"}</ErrorTitle>
          <BottomSwitch>
            <SwitchTitle style={{ color: plan ? "#9b9b9b" : "#02295a" }}>
              Monthly
            </SwitchTitle>
            <CheckBoxWrapper>
              <CheckBox
                onChange={() => setplan((prev) => !prev)}
                id="checkbox"
                type="checkbox"
              />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
            <SwitchTitle style={{ color: plan ? "#02295a" : "#9b9b9b" }}>
              Yearly
            </SwitchTitle>
          </BottomSwitch>
          <Navigation>
            <Paragraph
              style={{ fontWeight: 700, cursor: "pointer" }}
              onClick={() => setpage(1)}
            >
              Go Back
            </Paragraph>
            <Button onClick={submitHandler}>Next step</Button>
          </Navigation>
        </BottomWrapper>
      </Wrapper>
    </Container>
  );
};

export default SelectPlan;

const ErrorTitle = styled.p`
  font-size: 16px;
  height: 10px;
  color: red;
  font-weight: 700;
`;

export const Navigation = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitchTitle = styled.p`
  font-size: 16px;
  margin: 0px 10px;
  font-weight: 700;
`;

const BottomSwitch = styled.div`
  background-color: #f0f6ff;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PlanWrapper = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 52px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #02295a;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 31px;
      transition: 0.2s;
    }
  }
`;
