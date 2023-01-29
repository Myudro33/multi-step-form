import React from "react";
import styled from "styled-components";
import { PersonalProps } from "./PersonalInfo";

interface LeftBarProps {
  page: number;
  setpage: React.Dispatch<React.SetStateAction<number>>;
}

const LeftBar = ({ page, setpage }: LeftBarProps) => {
  const data = [
    { id: 1, title1: "step1", title2: "your info", active: true },
    {
      id: 2,
      title1: "step2",
      title2: "select plan",
      active: false,
    },
    {
      id: 3,
      title1: "step3",
      title2: "add-ons",
      active: false,
    },
    {
      id: 4,
      title1: "step4",
      title2: "summary",
      active: false,
    },
  ];

  return (
    <Container>
      {data.map((item) => (
        <StepContainer key={item.id}>
          <PageNumber full={item.id === page}>{item.id}</PageNumber>
          <StepTitleContainer>
            <StepTitleP>{item.title1}</StepTitleP>
            <StepTitleP bold>{item.title2}</StepTitleP>
          </StepTitleContainer>
        </StepContainer>
      ))}
    </Container>
  );
};

export default LeftBar;

const PageNumber = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid hsl(229, 24%, 87%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.full ? "black" : "white")};
  background-color: ${(props) => (props.full ? "#bfe2fd" : "transparent")};
  font-weight: 700;
  @media screen and (max-width: 400px) {
    width: 40px;
  }
`;

const StepTitleP = styled.p`
  color: white;
  text-transform: uppercase;
  font-weight: ${(props) => (props.bold ? "700" : "300")};
  color: ${(props) => (props.bold ? "white" : "#d6d9e6")};
  font-size: ${(props) => (props.bold ? "16px" : "15px")};
`;

const StepTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 40px;
  margin-left: 15px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const StepContainer = styled.div`
  width: 90%;
  height: 60px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 40px;
    margin: 30px 10px 0px 10px;
  }
`;

const Container = styled.div`
  width: 290px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 8px;
  background: url("https://multistep-form-23.netlify.app/assets/images/bg-sidebar-desktop.svg");
  @media screen and (max-width: 400px) {
    position: absolute;
    background: url("https://multistep-form-23.netlify.app/assets/images/bg-sidebar-mobile.svg");
    height: 190px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    border-radius: 0px;
  }
`;
