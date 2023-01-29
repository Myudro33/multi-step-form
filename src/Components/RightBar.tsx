import React, { useState } from "react";
import styled from "styled-components";
import AddOns from "./AddOns";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

const RightBar = ({
  page,
  setpage,
  setselectedPlan,
  selectedPlan,
  personalInfo,
  setpersonalInfo,
  setaddon,
  addon,
  plan,
  setplan,
}) => {
  return (
    <Container >
      {page === 1 && (
        <PersonalInfo
          personalInfo={personalInfo}
          setpersonalInfo={setpersonalInfo}
          setpage={setpage}
        />
      )}
      {page === 2 && (
        <SelectPlan
          plan={plan}
          setplan={setplan}
          setselectedPlan={setselectedPlan}
          selectedPlan={selectedPlan}
          setpage={setpage}
        />
      )}
      {page === 3 && (
        <AddOns
          selectedPlan={selectedPlan}
          setaddon={setaddon}
          setpage={setpage}
        />
      )}
      {page === 4 && (
        <Summary setpage={setpage} selectedPlan={selectedPlan} addon={addon} />
      )}
      {page===5&&(
        <ThankYou/>
      )}
    </Container>
  );
};

export default RightBar;

const Container = styled.div`
  width: 65%;
  height: 100%;
  padding: 25px 20px 10px 30px;
  @media screen and (max-width: 400px) {
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    padding: 20px 10px;
  }
`;
