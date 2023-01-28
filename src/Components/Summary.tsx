import React, { useState } from "react";
import { Container, Paragraph, Title } from "./PersonalInfo";
import styled from "styled-components";

const Summary = ({ setpage, selectedPlan, addon }) => {
  const [total, settotal] = useState(0);

  console.log(selectedPlan);

  return (
    <Container>
      <Title>Finishing up</Title>
      <Paragraph>Double-check everything looks OK before confirming.</Paragraph>
      <Wrapper>
        <PlanWrapper>
          <PlanTopContainer>
            <PlanTitleWrapper>
              <Title
                style={{ fontSize: "22px" }}
              >{`${selectedPlan.name} (${selectedPlan.plan})`}</Title>
              <p
                onClick={() => setpage(1)}
                style={{
                  textDecoration: "underline",
                  fontSize: "18px",
                  color: "#9699ab",
                  margin: "5px 0px",
                }}
              >
                change
              </p>
            </PlanTitleWrapper>
            <Title style={{ fontSize: "22px" }}>{`$${selectedPlan.price}/${
              selectedPlan.plan === "Monthly" ? "mo" : "yr"
            }`}</Title>
          </PlanTopContainer>
          <AddonsWrapper>
            {addon.map((item) => (
              <Addon>
                <Paragraph style={{ fontWeight: 700, fontSize: "19px" }}>
                  {item.name}
                </Paragraph>
                <Title style={{ fontSize: "19px" }}>{`$${item.price}/${
                  selectedPlan.plan === "Monthly" ? "mo" : "yr"
                }`}</Title>
              </Addon>
            ))}
          </AddonsWrapper>
        </PlanWrapper>
        <TotalWrapper>
          <Paragraph style={{ fontSize: "19px", fontWeight: 700 }}>
            Total( per month)
          </Paragraph>
          <Title style={{ color: "hsl(243, 100%, 62%)", fontSize: "25px" }}>
            $14/mo
          </Title>
        </TotalWrapper>
      </Wrapper>
    </Container>
  );
};

export default Summary;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 150px;
`;

const Addon = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PlanTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 10px 0px 20px 0px;
`;
const PlanWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: hsl(217, 100%, 97%);
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
