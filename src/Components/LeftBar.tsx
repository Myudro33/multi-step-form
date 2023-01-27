import React from "react";
import styled from "styled-components";
const LeftBar = () => {
  const data = [
    { id: 1, title1: "step1", title2: "your info", active: true },
    {
        id:2,title1:'step2', title2:'select plan',active:false
    },
    {
        id:3,title1:'step3', title2:'add-ons',active:false
    },
    {
        id:4,title1:'step4', title2:'summary',active:false
    },
  ];

  return (
    <Container>
        {data.map((item)=>(
      <StepContainer>
        <PageNumber full={item.active} >{item.id}</PageNumber>
        <StepTitleContainer key={item.id} >
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
  color: ${props=>props.full?'black':'white'};
  background-color: ${props=>props.full?'#bfe2fd':'transparent'};
  font-weight: 700;
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
`;
const StepContainer = styled.div`
  width: 90%;
  height: 60px;
  margin: 10px auto;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 290px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 8px;
  background: url("https://multistep-form-23.netlify.app/assets/images/bg-sidebar-desktop.svg");
`;
