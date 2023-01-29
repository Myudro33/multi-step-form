import React from "react";
import thankImage from "../assets/icon-thank-you.svg";
import { Paragraph, Title } from "./PersonalInfo";
import styled from "styled-components";

const ThankYou = () => {
  return (
    <Container>
      <Image src={thankImage} alt="" />
      <Title style={{ margin: "10px 0px" }}>Thank you!</Title>
      <ThankYouParagraph>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </ThankYouParagraph>
    </Container>
  );
};

export default ThankYou;

const ThankYouParagraph = styled(Paragraph)`
  width: 80%;
  text-align: center;
  font-weight: 700;
  @media screen and (max-width: 400px) {
    width: 100%;
    font-size: 15px;
  }
`;

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
