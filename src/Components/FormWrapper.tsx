import React, { useState } from "react";
import styled from "styled-components";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const FormWrapper = () => {
  const [page, setpage] = useState(2);
  const [selectedPlan, setselectedPlan] = useState({
    name: "",
    plan: "",
    price: "",
  });
  const [personalInfo, setpersonalInfo] = useState({
    name:'',
    email:'',
    number:''
  })
  const [addon, setaddon] = useState([])
  const [plan, setplan] = useState(false);

  
  return (
    <Container>
      <LeftBar page={page} setpage={setpage} />
      <RightBar
      plan={plan}
      setplan={setplan}
        selectedPlan={selectedPlan}
        setselectedPlan={setselectedPlan}
        page={page}
        setpage={setpage}
        setpersonalInfo={setpersonalInfo}
        personalInfo={personalInfo}
        setaddon={setaddon}
        addon={addon}
      />
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
