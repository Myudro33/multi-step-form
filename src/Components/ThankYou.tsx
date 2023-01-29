import React from "react";
import thankImage from "../assets/icon-thank-you.svg";
import { Paragraph, Title } from "./PersonalInfo";
import styled from "styled-components";

const ThankYou = () => {
  return (
    <Container>
      <Image src={thankImage} alt="" />
      <Title style={{margin:'10px 0px'}} >Thank you!</Title>
      <Paragraph style={{width:'83%',textAlign:'center',fontWeight:700}} >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Paragraph>
    </Container>
  );
};

export default ThankYou;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px 0px;
`;

const Container = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
