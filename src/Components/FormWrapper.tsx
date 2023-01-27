import React, { useState } from "react";
import styled from "styled-components";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const FormWrapper = () => {
    const [page, setpage] = useState(2)
  return (
    <Container>
      <LeftBar page={page} setpage={setpage} />
      <RightBar page={page} setpage={setpage} />
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
