import React from "react";
import styled from "styled-components";
import AddonCard from "./AddonCard";
import { Button,Paragraph,Container, Title } from "./PersonalInfo";
import { BackParagraph, Navigation } from "./SelectPlan";

const AddOns = ({ setpage,setaddon,selectedPlan }) => {
  
  const data = [
    {
      id: 1,
      title: "Online Service",
      paragraph: "Access to multiplayer games",
      price: selectedPlan.plan==='Monthly'?1:10,
      active: true,
    },
    {
      id: 2,
      title: "Larger Storage",
      paragraph: "Extra 1TB of cloud save",
      price: selectedPlan.plan==='Monthly'?2:20,
      active: false,
    },
    {
      id: 3,
      title: "Customizable Profile",
      paragraph: "Custom theme on your profile",
      price: selectedPlan.plan==='Monthly'?2:20,
      active: false,
    },
  ];
  return (
    <Container className='nika' >
      <Title  style={{width:'90%'}}  >Pick add-ons</Title>
      <Paragraph style={{width:'90%'}} >Add-ons help enhance your gaming experience.</Paragraph>
      <AddonsContainer>
        {data.map((item) => (
          <AddonCard
          selectedPlan={selectedPlan}
          setaddon={setaddon}
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
        <BackParagraph
          onClick={() => setpage(2)}
          style={{ fontWeight: 700, cursor: "pointer" }}
        >
          Go Back
        </BackParagraph>
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


