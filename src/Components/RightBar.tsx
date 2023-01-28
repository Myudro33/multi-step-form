import React, { useState } from 'react'
import styled from 'styled-components'
import PersonalInfo from './PersonalInfo'
import SelectPlan from './SelectPlan'

const RightBar = ({page,setpage}) => {
  const [selectedPlan, setselectedPlan] = useState({name:'',plan:'',price:''})
 
  return (
    <Container>
        {page===1&&(
            <PersonalInfo setpage={setpage} />
        )}
        {page===2&&(
          <SelectPlan setselectedPlan={setselectedPlan} selectedPlan={selectedPlan} setpage={setpage}  />
        )}
    </Container>
  )
}

export default RightBar




const Container = styled.div`
    width: 65%;
    height: 100%;
    border: 1px solid black;
    padding: 25px 20px 10px 30px;

`