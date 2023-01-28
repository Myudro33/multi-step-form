import React from "react";
import styled from "styled-components";
import AddonCard from "./AddonCard";
import { Button, Container, Paragraph, Title } from "./PersonalInfo";
import { Navigation } from "./SelectPlan";

const AddOns = ({ setpage }) => {
  const data = [
    {
      id: 1,
      title: "Online Service",
      paragraph: "Access to multiplayer games",
      price: "+$1/mo",
      active: true,
    },
    {
      id: 2,
      title: "Larger Storage",
      paragraph: "Extra 1TB of cloud save",
      price: "+$2/mo",
      active: false,
    },
    {
      id: 3,
      title: "Customizable Profile",
      paragraph: "Custom theme on your profile",
      price: "+$2/mo",
      active: false,
    },
  ];
  return (
    <Container>
      <Title>Pick add-ons</Title>
      <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
      <AddonsContainer>
        {data.map((item) => (
          <AddonCard
            active={item.active}
            id={item.id}
            key={item.id}
            paragraph={item.paragraph}
            price={item.price}
            title={item.title}
          />
        ))}
      </AddonsContainer>
      <Navigation>
        <Paragraph
          onClick={() => setpage(2)}
          style={{ fontWeight: 700, cursor: "pointer" }}
        >
          Go Back
        </Paragraph>
        <Button onClick={() => setpage(4)}>Next step</Button>
      </Navigation>
    </Container>
  );
};

export default AddOns;

const AddonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
