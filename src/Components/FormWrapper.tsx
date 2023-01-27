import React from "react";
import styled from "styled-components";
import LeftBar from "./LeftBar";

const FormWrapper = () => {
  return (
    <Container>
      <LeftBar />
    </Container>
  );
};

export default FormWrapper;

const Container = styled.div`
  width: 1050px;
  height: 600px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;
