import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface PersonalProps{
    setpage:React.Dispatch<React.SetStateAction<number>>
    page?:number
}

const PersonalInfo = ({setpage}:PersonalProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email Address").required("Required"),
      number: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
   setpage(2)
    },
  });

  return (
    <Container>
      <Title>Personal info</Title>
      <Paragraph>
        Please provide your name, email address, and phone number.
      </Paragraph>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <LabelTop>
            <LabelTopTitle>Name</LabelTopTitle>
            {formik.errors.name && formik.touched.name && (
              <LabelTopError>{formik.errors.name}</LabelTopError>
            )}
          </LabelTop>
          <Input
            error={formik.errors.name && formik.touched.name ? true : false}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. Stephen King"
            type="text"
          />
        </Label>
        <Label>
          <LabelTop>
            <LabelTopTitle>Email Address</LabelTopTitle>
            {formik.errors.email && formik.touched.email && (
              <LabelTopError>{formik.errors.email}</LabelTopError>
            )}
          </LabelTop>
          <Input
            error={formik.errors.email && formik.touched.email ? true : false}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. stephenking@lorem.com"
            type="mail"
          />
        </Label>
        <Label>
          <LabelTop>
            <LabelTopTitle>Phone Number</LabelTopTitle>
            {formik.errors.number && formik.touched.number && (
              <LabelTopError>{formik.errors.number.slice(0, 30)}</LabelTopError>
            )}
          </LabelTop>
          <Input
            error={formik.errors.number && formik.touched.number ? true : false}
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. +1 234 567 890"
            type="text"
          />
        </Label>
        <Button type="submit">Next step</Button>
      </Form>
    </Container>
  );
};

export default PersonalInfo;

export const Button = styled.button`
  background-color: hsl(213, 96%, 18%);
  width: 103px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #d9d6e6;
  align-self: flex-end;
  margin-top: 130px;
  cursor: pointer;
  &:hover {
    background-color: hsl(243, 100%, 62%);
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 43px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  border: ${(props) =>
    props.error ? "2px solid red" : "2px solid hsl(231, 11%, 63%)"};
  color: #00295a;
  margin-top: 10px;
  padding: 0px 10px;
  &::placeholder {
    font-size: 16px;
  }
`;
const LabelTopError = styled.p`
  color: #ed3548;
  font-size: 16px;
  font-weight: 700;
`;
const LabelTopTitle = styled.p`
  color: #00295a;
  font-size: 16px;
  font-weight: 700;
`;
const LabelTop = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.label`
  width: 100%;
  height: 80px;
  margin-top: 20px;
`;

export const Paragraph = styled.p`
  color: #9699ab;
  font-size: 16px;
  margin-top: 5px;
`;
export const Title = styled.h1`
  color: #00295a;
  font-size: 32px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
